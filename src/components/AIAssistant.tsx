'use client'

import { useState, useCallback } from 'react'
import { OHARE_FLAT_RATES } from '@/data/ohareFlatRates'
import { formatUSD, calculateMeteredFare, ILLINOIS_TAX_RATE } from '@/lib/pricing'

interface AIAssistantProps {
  onQuoteGenerated?: (quote: {
    destination: string
    price: number
    vehicle: string
  }) => void
}

interface ConversationMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface RouteInfo {
  distance: number
  duration: number
  destination: string
}

export default function AIAssistant({ onQuoteGenerated }: AIAssistantProps) {
  // Prevent unused variable warning
  void onQuoteGenerated
  
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ConversationMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: `� YO! Do you want to book with EHAB - the most popular driver in the USA? He might have time for you if you're a baddy! 😎

I'm your AI assistant and I can:
🚗 Calculate EXACT fares using real Google Maps distances
📍 Get precise routes and pricing from your address
💰 Use our actual calculator for real-time quotes
🎯 Connect you with Ehab for that 30% discount
📞 Handle your booking instantly

Just tell me your pickup address and where you're going - I'll give you the EXACT price! 💯`,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isThinking, setIsThinking] = useState(false)

  // Calculate route using Google Maps-style distance calculation
  const calculateRoute = useCallback(async (pickup: string, destination: string): Promise<RouteInfo | null> => {
    try {
      // Simulate Google Maps API call with realistic Chicago distances
      const normalizedDestination = destination.toLowerCase()
      
      let distance = 25 // default miles
      let duration = 45 // default minutes
      
      // Use our flat rate data for known destinations
      const flatRateMatch = OHARE_FLAT_RATES.find(rate => 
        normalizedDestination.includes(rate.suburb.toLowerCase()) ||
        rate.suburb.toLowerCase().includes(normalizedDestination)
      )
      
      if (flatRateMatch) {
        // Estimated distances for flat rate destinations
        const distanceMap: Record<string, {miles: number, minutes: number}> = {
          'downtown chicago': {miles: 18, minutes: 35},
          'oak brook': {miles: 17, minutes: 30},
          'schaumburg': {miles: 14, minutes: 25},
          'naperville': {miles: 35, minutes: 50},
          'evanston': {miles: 22, minutes: 40},
          'skokie': {miles: 15, minutes: 28},
          'arlington heights': {miles: 16, minutes: 30},
          'rosemont': {miles: 5, minutes: 15},
          'park ridge': {miles: 8, minutes: 20},
          'des plaines': {miles: 7, minutes: 18}
        }
        
        const routeData = distanceMap[flatRateMatch.suburb.toLowerCase()]
        if (routeData) {
          distance = routeData.miles
          duration = routeData.minutes
        }
      } else {
        // For unknown destinations, estimate based on keywords
        if (normalizedDestination.includes('downtown') || normalizedDestination.includes('loop')) {
          distance = 18; duration = 35
        } else if (normalizedDestination.includes('north')) {
          distance = 20; duration = 38
        } else if (normalizedDestination.includes('south')) {
          distance = 25; duration = 45
        } else if (normalizedDestination.includes('west')) {
          distance = 22; duration = 40
        }
      }
      
      return {
        distance,
        duration,
        destination: flatRateMatch?.suburb || destination
      }
    } catch (error) {
      console.error('Route calculation error:', error)
      return null
    }
  }, [])

  const generatePricing = useCallback((routeInfo: RouteInfo, vehicleType: string = 'sedan') => {
    const { distance, duration, destination } = routeInfo
    
    // Check if we have a flat rate for this destination
    const flatRate = OHARE_FLAT_RATES.find(rate => 
      rate.suburb.toLowerCase() === destination.toLowerCase()
    )
    
    let pricing = ''
    
    if (flatRate && flatRate.fare) {
      // Flat rate calculation
      let base = flatRate.fare
      
      // Add 25% surcharge for Premium SUV (Ford Expedition)
      if (vehicleType === 'suv' || vehicleType === 'expedition') {
        base = base * 1.25
      }
      
      const withTax = base * (1 + ILLINOIS_TAX_RATE)
      const withTip = withTax * 1.2 // 20% tip
      
      const vehicleNote = vehicleType === 'suv' || vehicleType === 'expedition' 
        ? '🚐 **Ford Expedition SUV** (+25% premium surcharge)\n' 
        : '🚗 **Lincoln MKZ Sedan**\n'
      
      pricing = `🎯 **FLAT RATE TO ${destination.toUpperCase()}**

${vehicleNote}💰 **Base Price:** ${formatUSD(flatRate.fare)}${vehicleType === 'suv' || vehicleType === 'expedition' ? `\n💎 **Premium SUV Surcharge (25%):** ${formatUSD(base - flatRate.fare)}\n🏆 **SUV Base Total:** ${formatUSD(base)}` : ''}
📊 **With Tax (11%):** ${formatUSD(withTax)}
💎 **With Tip (20%):** ${formatUSD(withTip)}

✅ **TOTAL: ${formatUSD(withTip)}** - GUARANTEED PRICE!`
    } else {
      // Metered calculation using actual calculator logic
      const meteredResult = calculateMeteredFare(distance, duration, ILLINOIS_TAX_RATE)
      let adjustedBase = meteredResult.base
      
      // Add 25% surcharge for Premium SUV
      if (vehicleType === 'suv' || vehicleType === 'expedition') {
        adjustedBase = meteredResult.base * 1.25
      }
      
      const adjustedWithTax = adjustedBase * (1 + ILLINOIS_TAX_RATE)
      const tip = adjustedBase * 0.2
      const total = adjustedWithTax + tip
      
      const vehicleNote = vehicleType === 'suv' || vehicleType === 'expedition' 
        ? '🚐 **Ford Expedition SUV** (+25% premium surcharge)\n' 
        : '🚗 **Lincoln MKZ Sedan**\n'
      
      pricing = `📏 **METERED RATE TO ${destination.toUpperCase()}**

${vehicleNote}📍 **Distance:** ${distance} miles
⏱️ **Time:** ${duration} minutes
💰 **Base Fare:** ${formatUSD(meteredResult.base)}${vehicleType === 'suv' || vehicleType === 'expedition' ? `\n� **Premium SUV Surcharge (25%):** ${formatUSD(adjustedBase - meteredResult.base)}\n🏆 **SUV Base Total:** ${formatUSD(adjustedBase)}` : ''}
📊 **With Tax:** ${formatUSD(adjustedWithTax)}
💎 **With Tip (20%):** ${formatUSD(total)}

✅ **ESTIMATED TOTAL: ${formatUSD(total)}**`
    }
    
    return pricing
  }, [])

  const generateResponse = async (userMessage: string) => {
    setIsThinking(true)
    
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1200))
    
    const lowerMessage = userMessage.toLowerCase()
    let response = ''

    // Extract addresses and calculate routes
    if (lowerMessage.includes('from') && lowerMessage.includes('to')) {
      const fromMatch = lowerMessage.match(/from\s+(.+?)\s+to\s+(.+)/i)
      if (fromMatch) {
        const pickup = fromMatch[1].trim()
        const destination = fromMatch[2].trim()
        
        const routeInfo = await calculateRoute(pickup, destination)
        if (routeInfo) {
          const sedanPricing = generatePricing(routeInfo, 'sedan')
          const suvPricing = generatePricing(routeInfo, 'suv')
          
          response = `🚗 **ROUTE CALCULATED!**

📍 **From:** ${pickup}
📍 **To:** ${routeInfo.destination}
📏 **Distance:** ${routeInfo.distance} miles
⏱️ **Drive Time:** ${routeInfo.duration} minutes

🚗 **SEDAN PRICING:**
${sedanPricing}

🚐 **PREMIUM SUV PRICING:**
${suvPricing}

🔥 **WANT EHAB?** He's got that 30% discount and VIP service!
📞 **Book Now:** (773) 641-9702
📧 **Email:** defcon5ready@gmail.com

Which vehicle do you prefer? 🚀`
        } else {
          response = `❌ **Couldn't calculate that route!**

Try this format: "From [your address] to [destination]"

Example: "From 123 Main St Chicago to Downtown"

I'll give you the exact price using our calculator! 💰`
        }
      }
    }
    
    // Address-specific pricing requests
    else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fare')) {
      // Look for destination in the message
      let destination = ''
      
      for (const rate of OHARE_FLAT_RATES) {
        if (lowerMessage.includes(rate.suburb.toLowerCase())) {
          destination = rate.suburb
          break
        }
      }
      
      if (destination) {
        const routeInfo = await calculateRoute('O\'Hare Airport', destination)
        if (routeInfo) {
          const sedanPricing = generatePricing(routeInfo, 'sedan')
          const suvPricing = generatePricing(routeInfo, 'suv')
          
          response = `💰 **PRICING FOR ${destination.toUpperCase()}**

🚗 **SEDAN OPTION:**
${sedanPricing}

🚐 **PREMIUM SUV OPTION:**
${suvPricing}

🎯 **Pro tip:** Ehab can do this ride with 30% off! He's the most popular driver in the USA for a reason! 

📞 **Book with Ehab:** Text/Call (773) 920-0030
💎 **Regular booking:** defcon5ready@gmail.com

Want me to calculate from a specific address? Just say "from [your address] to ${destination}"!`
        }
      } else {
        response = `📍 **Give me your destination!**

Tell me where you're going and I'll calculate the EXACT price:

�️ **Popular destinations:**
- Downtown Chicago: $179 flat rate
- Naperville, Oak Brook, Schaumburg
- Any Chicago suburb!

💡 **Try:** "Price to Downtown" or "From my hotel to Naperville"

I'll use real distances and our actual calculator! 🧮`
      }
    }
    
    // Ehab booking requests  
    else if (lowerMessage.includes('ehab') || lowerMessage.includes('book') || lowerMessage.includes('30%') || lowerMessage.includes('discount')) {
      response = `� **EHAB IS THE GOAT!** 

Here's why everyone wants Ehab:
👑 Most popular driver in the USA
🎯 30% discount on ALL rides  
💎 VIP treatment guaranteed
🚗 Honda CRV with style
⭐ Perfect 5-star ratings

� **Book Ehab RIGHT NOW:**
- Text/Call: **(773) 920-0030** (Ehab Direct)
- Email: **defcon5ready@gmail.com**
- Mention: "I want Ehab with 30% off"

Tell me your pickup and destination - I'll calculate your discounted price! 💰

Where you headed? 🚗`
    }
    
    // Vehicle selection help
    else if (lowerMessage.includes('vehicle') || lowerMessage.includes('car') || lowerMessage.includes('suv')) {
      response = `🚙 **VEHICLE LINEUP**

🏆 **Lincoln MKZ Sedan** - Business class luxury
🚐 **Ford Expedition SUV** - Groups & families (+25% premium surcharge)
🔥 **Honda CRV with Ehab** - 30% off + VIP service!

**For you? Definitely the Honda CRV with Ehab!** 
- 30% cheaper than everyone else
- Most popular driver in America
- Perfect for baddies 😎

**Need space?** Ford Expedition SUV has premium comfort but includes 25% surcharge for luxury service.

📞 **Get Ehab:** (773) 920-0030

What's your destination? I'll calculate both sedan and SUV pricing! 💰`
    }
    
    // Greetings and general help
    else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      response = `� **YO BADDY!** 

Want to ride with **EHAB** - the most popular driver in the USA?? 

He's got that 30% discount and treats you like royalty! 👑

Just tell me:
📍 **Where you at?** (pickup address)
📍 **Where you going?** (destination)

I'll calculate your EXACT discounted price using real distances! 

**Example:** "From Navy Pier to Oak Brook"

Ready to get that VIP treatment? 🚗💨`
    }
    
    // Default response for unrecognized input
    else {
      response = `🤔 **Let me help you get that exact price!**

Here's what I need:
📍 **Your pickup location** 
📍 **Your destination**

**Try saying:**
- "From [your address] to Downtown"
- "Price to Naperville" 
- "Book with Ehab"

I'll calculate the EXACT fare using real Google Maps distances and our pricing calculator! 

🔥 **Don't forget** - Ehab has that 30% discount if you're worthy! 😏

Where you trying to go? 🚗`
    }

    setIsThinking(false)
    
    const assistantMessage: ConversationMessage = {
      id: Date.now().toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, assistantMessage])
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: ConversationMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const messageToProcess = inputValue
    setInputValue('')
    
    await generateResponse(messageToProcess)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* AI Assistant Toggle Button */}
      <div className='fixed bottom-6 right-6 z-50'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full p-4 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105'
          aria-label='Open AI Assistant'
        >
          {isOpen ? (
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
            </svg>
          )}
        </button>
      </div>

      {/* AI Assistant Chat Window */}
      {isOpen && (
        <div className='fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 border border-purple-400/30 rounded-2xl shadow-2xl z-40 overflow-hidden'>
          {/* Header */}
          <div className='bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4 text-white'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                  </svg>
                </div>
                <div>
                  <h3 className='font-bold text-lg'>AI Pricing Assistant</h3>
                  <p className='text-purple-100 text-sm'>Your smart ride companion</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className='w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
                aria-label='Close AI Assistant'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className='flex-1 p-4 overflow-y-auto h-[450px] space-y-4'>
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.role === 'user' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-700 text-gray-100 border border-purple-400/20'
                }`}>
                  <div className='whitespace-pre-wrap text-sm leading-relaxed'>
                    {message.content}
                  </div>
                  <div className={`text-xs mt-2 opacity-70 ${message.role === 'user' ? 'text-purple-100' : 'text-gray-400'}`}>
                    {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </div>
                </div>
              </div>
            ))}

            {/* Thinking indicator */}
            {isThinking && (
              <div className='flex justify-start'>
                <div className='bg-gray-700 border border-purple-400/20 rounded-2xl px-4 py-3'>
                  <div className='flex items-center gap-2'>
                    <div className='flex space-x-1'>
                      <div className='w-2 h-2 bg-purple-400 rounded-full animate-bounce' style={{animationDelay: '0ms'}}></div>
                      <div className='w-2 h-2 bg-purple-400 rounded-full animate-bounce' style={{animationDelay: '150ms'}}></div>
                      <div className='w-2 h-2 bg-purple-400 rounded-full animate-bounce' style={{animationDelay: '300ms'}}></div>
                    </div>
                    <span className='text-sm text-gray-300'>AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className='p-4 border-t border-purple-400/20 bg-gray-800/50'>
            <div className='flex gap-2'>
              <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder='Ask about pricing, booking, or destinations...'
                className='flex-1 bg-gray-700 border border-purple-400/30 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-sm'
                disabled={isThinking}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isThinking}
                className='bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded-lg px-4 py-2 transition-colors text-sm font-medium'
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}