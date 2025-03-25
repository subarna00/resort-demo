
import { useEffect, useState } from 'react';
import { Calendar, ChevronDown, MinusCircle, PlusCircle, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'sonner';

const BookingPage = () => {
  // State
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  // Room types
  const rooms = [
    {
      id: 'riverside-suite',
      name: 'Riverside Suite',
      description: 'Wake up to the gentle sounds of the Kulekhani River with panoramic views from your private balcony.',
      price: 240,
      capacity: 2,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['River View', 'King Bed', 'Spa Bathroom', 'Mini Bar', 'Room Service']
    },
    {
      id: 'mountain-deluxe',
      name: 'Mountain View Deluxe',
      description: 'Immerse yourself in the majestic Himalayan landscape with floor-to-ceiling windows framing the mountain range.',
      price: 180,
      capacity: 2,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Mountain View', 'Queen Bed', 'Rainfall Shower', 'Work Desk', 'Balcony']
    },
    {
      id: 'garden-cottage',
      name: 'Garden Cottage',
      description: 'Experience tranquility in your private cottage surrounded by lush gardens and nature trails.',
      price: 320,
      capacity: 4,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      amenities: ['Private Garden', 'King Bed', 'Outdoor Shower', 'Kitchenette', 'Private Terrace']
    }
  ];

  // Handlers
  const incrementAdults = () => {
    if (adults < 6) setAdults(adults + 1);
  };

  const decrementAdults = () => {
    if (adults > 1) setAdults(adults - 1);
  };

  const incrementChildren = () => {
    if (children < 4) setChildren(children + 1);
  };

  const decrementChildren = () => {
    if (children > 0) setChildren(children - 1);
  };

  const handleNext = () => {
    if (step === 1) {
      // Validate step 1
      if (!checkIn || !checkOut || !roomType) {
        toast.error('Please fill in all required fields');
        return;
      }
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (step === 2) {
      setStep(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !email || !phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Booking request received! We will contact you shortly to confirm your reservation.');
      
      // Reset form
      setCheckIn('');
      setCheckOut('');
      setAdults(2);
      setChildren(0);
      setRoomType('');
      setName('');
      setEmail('');
      setPhone('');
      setSpecialRequests('');
      setStep(1);
    }, 1500);
  };

  // Calculate nights and total
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const selectedRoom = rooms.find(room => room.id === roomType);
    
    if (!selectedRoom || nights === 0) return 0;
    
    return selectedRoom.price * nights;
  };

  const selectedRoomData = rooms.find(room => room.id === roomType);

  useEffect(() => {
    // Set page title
    document.title = 'Book Your Stay - Kulekhani Resort';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Book Your Stay at Kulekhani Resort" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
            <span className="inline-block py-1 px-3 mb-4 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full animate-fade-in">
              Reserve Now
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              Book Your Stay
            </h1>
            <p className="text-xl text-white/90 max-w-2xl animate-fade-in">
              Experience the perfect blend of luxury and nature at Kulekhani Resort
            </p>
          </div>
        </div>

        {/* Booking Section */}
        <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Steps Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step >= 1 ? 'bg-resort-forest text-white' : 'bg-resort-stone/50 text-resort-mountain'
                  }`}>
                    1
                  </div>
                  <div className={`w-24 sm:w-32 h-1 ${
                    step >= 2 ? 'bg-resort-forest' : 'bg-resort-stone/50'
                  }`} />
                </div>
                <div className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step >= 2 ? 'bg-resort-forest text-white' : 'bg-resort-stone/50 text-resort-mountain'
                  }`}>
                    2
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="text-center w-32 sm:w-40">
                  <p className={`text-sm font-medium ${step === 1 ? 'text-resort-forest' : 'text-resort-mountain'}`}>
                    Room Selection
                  </p>
                </div>
                <div className="text-center w-32 sm:w-40">
                  <p className={`text-sm font-medium ${step === 2 ? 'text-resort-forest' : 'text-resort-mountain'}`}>
                    Guest Details
                  </p>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="px-6 py-4">
                  <h2 className="text-xl font-bold text-resort-forest">
                    {step === 1 ? 'Select Your Room & Dates' : 'Guest Information'}
                  </h2>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                {step === 1 ? (
                  <>
                    {/* Step 1: Room Selection and Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label htmlFor="check-in" className="block text-sm font-medium text-resort-forest mb-2">
                          Check-in Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id="check-in"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="input-field pl-10"
                            required
                          />
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-resort-mountain w-5 h-5" />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="check-out" className="block text-sm font-medium text-resort-forest mb-2">
                          Check-out Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id="check-out"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            min={checkIn || new Date().toISOString().split('T')[0]}
                            className="input-field pl-10"
                            required
                          />
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-resort-mountain w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-sm font-medium text-resort-forest mb-2">
                        Guests
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center justify-between p-3 border border-resort-sage rounded-md">
                          <div className="flex items-center">
                            <Users className="text-resort-mountain w-5 h-5 mr-3" />
                            <div>
                              <p className="font-medium text-resort-forest">Adults</p>
                              <p className="text-xs text-resort-mountain">Ages 13+</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button 
                              type="button" 
                              onClick={decrementAdults}
                              className="text-resort-forest hover:text-resort-river transition-colors"
                              aria-label="Decrease adults"
                            >
                              <MinusCircle className="w-6 h-6" />
                            </button>
                            <span className="w-6 text-center font-medium">{adults}</span>
                            <button 
                              type="button" 
                              onClick={incrementAdults}
                              className="text-resort-forest hover:text-resort-river transition-colors"
                              aria-label="Increase adults"
                            >
                              <PlusCircle className="w-6 h-6" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 border border-resort-sage rounded-md">
                          <div className="flex items-center">
                            <Users className="text-resort-mountain w-5 h-5 mr-3" />
                            <div>
                              <p className="font-medium text-resort-forest">Children</p>
                              <p className="text-xs text-resort-mountain">Ages 0-12</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button 
                              type="button" 
                              onClick={decrementChildren}
                              className="text-resort-forest hover:text-resort-river transition-colors"
                              aria-label="Decrease children"
                            >
                              <MinusCircle className="w-6 h-6" />
                            </button>
                            <span className="w-6 text-center font-medium">{children}</span>
                            <button 
                              type="button" 
                              onClick={incrementChildren}
                              className="text-resort-forest hover:text-resort-river transition-colors"
                              aria-label="Increase children"
                            >
                              <PlusCircle className="w-6 h-6" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-sm font-medium text-resort-forest mb-2">
                        Select Room Type <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-4">
                        {rooms.map((room) => (
                          <div 
                            key={room.id}
                            className={`border rounded-lg overflow-hidden transition-all ${
                              roomType === room.id
                                ? 'border-resort-forest shadow-md'
                                : 'border-resort-sage hover:border-resort-mountain'
                            }`}
                          >
                            <div className="grid grid-cols-1 md:grid-cols-3">
                              <div className="md:col-span-1">
                                <img
                                  src={room.image}
                                  alt={room.name}
                                  className="w-full h-48 md:h-full object-cover"
                                />
                              </div>
                              <div className="p-4 md:col-span-2">
                                <div className="flex flex-col h-full">
                                  <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-resort-forest">{room.name}</h3>
                                    <div className="text-right">
                                      <p className="text-lg font-bold text-resort-forest">${room.price}</p>
                                      <p className="text-sm text-resort-mountain">per night</p>
                                    </div>
                                  </div>
                                  <p className="text-resort-mountain text-sm mb-4">{room.description}</p>
                                  
                                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-4">
                                    {room.amenities.map((amenity, index) => (
                                      <div key={index} className="flex items-center">
                                        <svg className="w-4 h-4 mr-1 text-resort-river" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-xs text-resort-mountain">{amenity}</span>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  <div className="mt-auto">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm text-resort-mountain">
                                        <Users className="inline w-4 h-4 mr-1" />
                                        Up to {room.capacity} {room.capacity === 1 ? 'person' : 'people'}
                                      </span>
                                      <label className="inline-flex items-center cursor-pointer">
                                        <input
                                          type="radio"
                                          name="roomType"
                                          value={room.id}
                                          checked={roomType === room.id}
                                          onChange={() => setRoomType(room.id)}
                                          className="sr-only"
                                        />
                                        <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                                          roomType === room.id
                                            ? 'bg-resort-forest text-white'
                                            : 'bg-resort-stone/30 text-resort-forest hover:bg-resort-stone/50'
                                        } transition-colors duration-200`}>
                                          {roomType === room.id ? 'Selected' : 'Select Room'}
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="button-primary"
                      >
                        Continue to Guest Details
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Step 2: Guest Details */}
                    <div className="mb-8">
                      <h3 className="text-lg font-medium text-resort-forest mb-4">Booking Summary</h3>
                      <div className="bg-resort-stone/20 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-resort-mountain">Room Type</p>
                            <p className="font-medium text-resort-forest">{selectedRoomData?.name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-resort-mountain">Guests</p>
                            <p className="font-medium text-resort-forest">
                              {adults} {adults === 1 ? 'Adult' : 'Adults'}
                              {children > 0 && `, ${children} ${children === 1 ? 'Child' : 'Children'}`}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-resort-mountain">Check-in</p>
                            <p className="font-medium text-resort-forest">{new Date(checkIn).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</p>
                          </div>
                          <div>
                            <p className="text-sm text-resort-mountain">Check-out</p>
                            <p className="font-medium text-resort-forest">{new Date(checkOut).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</p>
                          </div>
                          <div>
                            <p className="text-sm text-resort-mountain">Duration</p>
                            <p className="font-medium text-resort-forest">{calculateNights()} {calculateNights() === 1 ? 'Night' : 'Nights'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-resort-mountain">Price</p>
                            <p className="font-medium text-resort-forest">${selectedRoomData?.price} per night</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-resort-stone/30">
                          <div className="flex justify-between items-center">
                            <p className="font-medium text-resort-forest">Total Price</p>
                            <p className="text-xl font-bold text-resort-forest">${calculateTotal()}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-resort-forest mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="input-field"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-resort-forest mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="input-field"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label htmlFor="phone" className="block text-sm font-medium text-resort-forest mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="input-field"
                        placeholder="+1 234 567 890"
                        required
                      />
                    </div>

                    <div className="mb-8">
                      <label htmlFor="special-requests" className="block text-sm font-medium text-resort-forest mb-2">
                        Special Requests
                      </label>
                      <textarea
                        id="special-requests"
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        rows={4}
                        className="input-field resize-none"
                        placeholder="Let us know if you have any special requirements or preferences"
                      />
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={handlePrevious}
                        className="button-secondary"
                      >
                        Back to Room Selection
                      </button>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`button-primary min-w-[200px] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          'Complete Booking'
                        )}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingPage;
