'use client';

import { useState, useMemo } from 'react'
import BookingForm from '@/components/BookingForm'
import AIAssistant from '@/components/AIAssistant'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [vehicleType, setVehicleType] = useState('sedan');
  const [isCalculating, setIsCalculating] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [passengerCount, setPassengerCount] = useState('1');

  // Enhanced fare calculation with proper logic
  const calculateFare = () => {
    // Reset validation
    setValidationError('');
    
    // Validate inputs
    if (!pickup.trim()) {
      setValidationError('Please enter a pickup location');
      return;
    }
    if (!dropoff.trim()) {
      setValidationError('Please enter a destination');
      return;
    }
    
    // Validate passenger count vs vehicle type
    const passengers = parseInt(passengerCount);
    if (vehicleType === 'sedan' && passengers > 3) {
      setValidationError('Sedan can only accommodate up to 3 passengers. Please select SUV for 4-6 passengers.');
      return;
    }
    if (vehicleType === 'suv' && passengers > 6) {
      setValidationError('Our SUV can accommodate up to 6 passengers maximum.');
      return;
    }
    
    setIsCalculating(true);
    
    // Simulate API call with realistic delay
    setTimeout(() => {
      setShowEstimate(true);
      setIsCalculating(false);
    }, 1200);
  };

  // Fare estimation logic (enhanced)
  const fareEstimate = useMemo(() => {
    if (!showEstimate || !pickup || !dropoff) return null;
    
    // More sophisticated base fare calculation
    const distance = Math.random() * 20 + 5; // Simulate 5-25 mile distance
    const baseRate = vehicleType === 'suv' ? 3.50 : 2.80; // Per mile rate
    const baseFare = Math.round(distance * baseRate + 15); // Base + distance
    
    const surcharge = vehicleType === 'suv' ? baseFare * 0.25 : 0; // 25% surcharge for SUV
    const subtotal = baseFare + surcharge;
    const tax = subtotal * 0.10; // 10% tax
    const serviceFee = subtotal * 0.20; // 20% service fee
    const total = subtotal + tax + serviceFee;
    
    return {
      distance: distance.toFixed(1),
      passengers: passengerCount,
      vehicleModel: vehicleType === 'suv' ? 'Ford Expedition' : 'Lincoln MKZ',
      base: baseFare,
      surcharge: surcharge,
      subtotal: subtotal,
      tax: tax,
      serviceFee: serviceFee,
      total: total
    };
  }, [pickup, dropoff, vehicleType, showEstimate, passengerCount]);

  // FAQ data
  const faqs = [
    {
      question: "How do I book a ride?",
      answer: "You can book through our website, call us at (773) 641-9702, or use our AI assistant for instant quotes."
    },
    {
      question: "Do you operate 24/7?",
      answer: "Yes! We're your late night hero - available 24 hours a day, 7 days a week."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Oak Brook, O'Hare Airport, downtown Chicago, and the greater Chicagoland area."
    },
    {
      question: "Are your drivers licensed and insured?",
      answer: "Absolutely. All our drivers are professionally licensed, vetted, and our vehicles are commercially insured."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Ehab is the best driver in Chicago! Always on time and such a professional service."
    },
    {
      name: "Mike K.",
      rating: 5,
      text: "Late Night Hero saved me when I needed a ride to O'Hare at 3 AM. Reliable and fair pricing."
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Clean cars, professional drivers, and transparent pricing. This is how ride service should be done."
    }
  ];

  const fleetVehicles = [
    {
      name: "Lincoln MKZ",
      type: "Sedan",
      capacity: "1-3 passengers",
      image: "/mkz.jpg",
      description: "Business-class comfort with professional service",
      link: "/fleet/sedan"
    },
    {
      name: "Ford Expedition",
      type: "Premium SUV",
      capacity: "1-6 passengers",
      image: "/expedition.jpg",
      description: "Spacious luxury for groups and airport transfers",
      link: "/fleet/suv"
    },
    {
      name: "Honda CRV (Special)",
      type: "Discreet Service",
      capacity: "1-4 passengers",
      image: "/honda.jpg",
      description: "30% off special - Driver Ehab (Most Popular!)",
      special: true,
      link: "/fleet/discreet"
    }
  ];

  return (
    <>
      {/* SEO JSON-LD Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Late Night Hero Black Car",
            "image": "https://latenighthero.com/mkz.jpg",
            "@id": "https://latenighthero.com",
            "url": "https://latenighthero.com",
            "telephone": "(773) 641-9702",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Oak Brook",
              "addressLocality": "Oak Brook",
              "addressRegion": "IL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.8369,
              "longitude": -87.9312
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })
        }}
      />

      <main>
        {/* Hero Section */}
        <section className="container mt-10">
          <div className="grid gap-8 sm:grid-cols-2 items-center">
            <div>
              <h1 className="h1">Late Night Hero Black Car</h1>
              <p className="mt-4 text-lg text-white/80">
                <strong>Built from nothing.</strong> Syrian-owned luxury transportation serving                 <strong>Oak Brook</strong>, <strong>O&apos;Hare</strong>, and greater Chicago.
                8+ years • 2000+ happy customers • Professional service 24/7
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#book" className="btn btn-primary" aria-label="Book now">Book Now</a>
                <Link href="/rates" className="btn btn-outline" aria-label="View rates">View Rates</Link>
              </div>
              <p className="mt-3 small">Why riders choose us: predictable pricing, clean late-model sedans & SUVs, meet-and-greet on request, local expertise.</p>
            </div>
            <div className="card p-4">
              <div className="relative aspect-video">
                <Image
                  src="/mkz.jpg"
                  alt="Late Night Hero black sedan at night in Oak Brook parking lot"
                  fill
                  priority
                  className="rounded-xl object-cover"
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-black/60 via-black/20 to-black/0 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="container my-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: '8+', label: 'Years in Business' },
              { number: '2000+', label: 'Happy Customers' },
              { number: '24/7', label: 'Available Service' },
              { number: '100%', label: 'Licensed & Insured' }
            ].map((stat, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Fare Estimator */}
        <section className="container my-16">
          <h2 className="h2 mb-8 text-center">Get Instant Fare Estimate</h2>
          
          <div className="card p-8 max-w-2xl mx-auto">
            <div className="grid gap-4 mb-6">
              <input
                type="text"
                placeholder="Enter pickup address (e.g., O'Hare Airport, Oak Brook Mall)"
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                  setShowEstimate(false);
                  setValidationError('');
                }}
                className="p-3 rounded-lg border border-brand-purple/50 bg-white/5 text-white placeholder:text-white/50 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Enter destination address (e.g., Downtown Chicago, 123 Main St)"
                value={dropoff}
                onChange={(e) => {
                  setDropoff(e.target.value);
                  setShowEstimate(false);
                  setValidationError('');
                }}
                className="p-3 rounded-lg border border-brand-purple/50 bg-white/5 text-white placeholder:text-white/50 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30 outline-none transition-all"
              />
              <div className="grid grid-cols-2 gap-4">
                <select
                  value={vehicleType}
                  onChange={(e) => {
                    setVehicleType(e.target.value);
                    setShowEstimate(false);
                  }}
                  className="p-3 rounded-lg border border-brand-purple/50 bg-white/5 text-white focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30 outline-none transition-all"
                >
                  <option value="sedan">Sedan - Lincoln MKZ</option>
                  <option value="suv">SUV - Ford Expedition (+25%)</option>
                </select>
                <select
                  value={passengerCount}
                  onChange={(e) => {
                    setPassengerCount(e.target.value);
                    setShowEstimate(false);
                  }}
                  className="p-3 rounded-lg border border-brand-purple/50 bg-white/5 text-white focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/30 outline-none transition-all"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5">5 Passengers</option>
                  <option value="6">6 Passengers</option>
                </select>
              </div>
            </div>

            {/* Calculate Button */}
            <div className="text-center mb-6">
              <button
                onClick={calculateFare}
                disabled={isCalculating}
                className="btn btn-primary text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {isCalculating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Calculating Fare...
                  </>
                ) : (
                  'Calculate Fare'
                )}
              </button>
            </div>

            {/* Validation Error */}
            {validationError && (
              <div className="mb-6 p-3 bg-red-500/20 border border-red-500/40 rounded-lg text-red-300 text-center">
                {validationError}
              </div>
            )}

            {/* Enhanced Fare Display */}
            {fareEstimate && showEstimate && (
              <div className="space-y-4">
                <div className="card p-6 bg-brand-purple/20 border-brand-purple/40">
                  <h3 className="h3 mb-4 text-brand-purple text-center">Your Fare Estimate</h3>
                  
                  {/* Trip Summary */}
                  <div className="mb-4 p-3 bg-brand-purple/10 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-white/70">Vehicle:</span>
                        <div className="font-semibold">{fareEstimate.vehicleModel}</div>
                      </div>
                      <div>
                        <span className="text-white/70">Passengers:</span>
                        <div className="font-semibold">{fareEstimate.passengers} passenger{fareEstimate.passengers !== '1' ? 's' : ''}</div>
                      </div>
                      <div>
                        <span className="text-white/70">Distance:</span>
                        <div className="font-semibold">{fareEstimate.distance} miles</div>
                      </div>
                      <div>
                        <span className="text-white/70">Trip Time:</span>
                        <div className="font-semibold">~{Math.ceil(parseFloat(fareEstimate.distance) * 2.5)} mins</div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Base Fare:</span>
                      <span className="font-semibold">${fareEstimate.base.toFixed(2)}</span>
                    </div>
                    {fareEstimate.surcharge > 0 && (
                      <div className="flex justify-between text-orange-400">
                        <span>SUV Premium (25%):</span>
                        <span className="font-semibold">+${fareEstimate.surcharge.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="border-t border-brand-purple/30 pt-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span className="font-semibold">${fareEstimate.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-white/70">
                        <span>Tax (10%):</span>
                        <span>+${fareEstimate.tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-white/70">
                        <span>Service Fee (20%):</span>
                        <span>+${fareEstimate.serviceFee.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="border-t border-brand-purple/30 pt-2">
                      <div className="flex justify-between text-xl font-bold text-brand-purple">
                        <span>Total Estimate:</span>
                        <span>${fareEstimate.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-brand-purple/10 rounded-lg">
                    <p className="text-sm text-white/80 text-center">
                      💡 <strong>Final pricing confirmed by dispatcher before pickup</strong>
                    </p>
                    <p className="text-xs text-white/60 text-center mt-1">
                      Prices may vary based on traffic, tolls, and exact route
                    </p>
                  </div>
                </div>
                
                {/* Action Buttons after calculation */}
                <div className="grid gap-3 sm:grid-cols-3">
                  <a href="#book" className="btn btn-primary text-center">
                    📱 Book This Ride
                  </a>
                  <a href="tel:7736419702" className="btn btn-outline text-center">
                    📞 Call Main Line
                  </a>
                  <a href="tel:7739200030" className="btn btn-outline text-center bg-red-500/20 border-red-500/40 text-red-300 hover:bg-red-500/30">
                    ⭐ Call Ehab Direct
                  </a>
                </div>
                
                {/* Reset Button */}
                <div className="text-center">
                  <button
                    onClick={() => {
                      setPickup('');
                      setDropoff('');
                      setVehicleType('sedan');
                      setPassengerCount('1');
                      setShowEstimate(false);
                      setValidationError('');
                    }}
                    className="text-sm text-brand-purple hover:text-white transition-colors underline"
                  >
                    Calculate Another Fare
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Fleet Section */}
        <section id="fleet" className="container my-16" aria-label="Fleet">
          <div className="h2 mb-6">Our Premium Fleet</div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fleetVehicles.map((vehicle, index) => (
              <Link key={index} href={vehicle.link} className={`card p-0 overflow-hidden hover:scale-105 transition-transform group ${vehicle.special ? 'border-red-500/30 relative' : ''}`}>
                {vehicle.special && (
                  <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                    -30% OFF
                  </div>
                )}
                <div className="relative h-40">
                  <Image 
                    src={vehicle.image} 
                    alt={`${vehicle.name} for ${vehicle.type.toLowerCase()} service`}
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-300" 
                    sizes="(max-width: 800px) 50vw, 33vw" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="h3 mb-1">{vehicle.name}</div>
                  <div className="small mb-1">{vehicle.capacity} • {vehicle.type}</div>
                  <div className="text-sm text-white/80 mb-3">{vehicle.description}</div>
                  <div className={`text-xs ${vehicle.special ? 'text-red-400' : 'text-brand-purple'} mt-2`}>
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* About Card */}
        <section className="container my-16">
          <div className="grid gap-6 sm:grid-cols-2">
            <Link href="/about" className="card p-0 overflow-hidden hover:scale-105 transition-transform group">
              <div className="relative h-40">
                <Image src="/Owner.jpg" alt="Nur Allababidi - Late Night Hero Founder" fill className="object-cover group-hover:scale-110 transition-transform duration-300" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="h3 mb-1">Our Founder</div>
                <div className="small">Nur Allababidi • Built from nothing</div>
                <div className="text-xs text-brand-purple mt-2">Learn more →</div>
              </div>
            </Link>
            <Link href="/careers" className="card p-5 hover:scale-105 transition-transform group border-yellow-500/30 bg-gradient-to-br from-yellow-900/10 to-orange-900/5">
              <div className="h3 mb-1 text-yellow-400">Want Your Car Here?</div>
              <div className="small">Call or message us and tell us more about yourself</div>
              <div className="text-xs text-yellow-400 mt-2">Join Our Team →</div>
            </Link>
          </div>
        </section>

        {/* Sample Rates */}
        <section id="rates" className="container my-16" aria-label="Rates">
          <div className="h2 mb-4">Sample Flat Rate</div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="card p-5">
              <div className="h3">O&apos;Hare → Downtown</div>
              <div className="mt-2 text-white/85">$179 base + tax + 20% tip required</div>
            </div>
            <div className="card p-5">
              <div className="h3">Oak Brook ↔ O&apos;Hare</div>
              <div className="mt-2 text-white/85">Metered or upfront quote on request</div>
            </div>
            <div className="card p-5">
              <div className="h3">Oak Brook ↔ Downtown</div>
              <div className="mt-2 text-white/85">Metered or upfront quote on request</div>
            </div>
          </div>
          <p className="small mt-3">Exact price confirmed by dispatcher before pickup. Hourly and long-distance available.</p>
          <div className="text-center mt-6">
            <Link href="/rates" className="btn btn-primary">View Full Rate Sheet</Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container my-16">
          <h2 className="h2 mb-8 text-center">What Our Customers Say</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="font-bold text-brand-purple">
                  — {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container my-16">
          <h2 className="h2 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card p-6">
                <summary className="text-lg font-bold cursor-pointer text-brand-purple mb-4">
                  {faq.question}
                </summary>
                <p className="text-white/80 pl-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container my-16" aria-label="Why choose us">
          <div className="h2 mb-4">Why riders choose us</div>
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="card p-5">Commercially insured vehicles and professional, vetted drivers.</li>
            <li className="card p-5">Transparent pricing: metered or upfront with tax + tip.</li>
            <li className="card p-5">Local dispatch you can call or text 24/7. Real human support.</li>
            <li className="card p-5">Meet-and-greet, child seats on request, and flexible stops.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="container my-16 text-center">
          <div className="card p-12 bg-gradient-to-r from-brand-purple/20 to-brand-purple/10">
            <h2 className="h2 mb-4">Ready to Ride with Late Night Hero?</h2>
            <p className="text-lg mb-8 text-white/80">
              Available 24/7 for all your transportation needs in Chicagoland
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="tel:7736419702" 
                className="btn btn-primary text-lg px-8 py-4"
              >
                Call Now: (773) 641-9702
              </a>
              <a 
                href="tel:7739200030" 
                className="btn btn-outline text-lg px-8 py-4"
              >
                Call Ehab: (773) 920-0030
              </a>
            </div>
          </div>
        </section>

        <BookingForm />
        
        {/* AI Assistant */}
        <AIAssistant />
      </main>
    </>
  );
}
