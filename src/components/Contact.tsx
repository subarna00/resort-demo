
import { useState } from 'react';
import { PhoneCall, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="section-padding bg-resort-sand" id="contact">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm text-resort-river font-medium tracking-wider uppercase border-b-2 border-resort-river">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-resort-mountain">
            Have questions or ready to book your stay? Our team is here to assist you with any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Resort Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-resort-river/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-resort-river" />
                  </div>
                  <div>
                    <h4 className="font-medium text-resort-forest mb-1">Location</h4>
                    <p className="text-resort-mountain">Kulekhani Riverside, Markhu</p>
                    <p className="text-resort-mountain">Makwanpur, Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-resort-river/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <PhoneCall className="w-5 h-5 text-resort-river" />
                  </div>
                  <div>
                    <h4 className="font-medium text-resort-forest mb-1">Phone</h4>
                    <p className="text-resort-mountain">+977 1 234 5678</p>
                    <p className="text-resort-mountain">+977 9876 543210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-resort-river/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="w-5 h-5 text-resort-river" />
                  </div>
                  <div>
                    <h4 className="font-medium text-resort-forest mb-1">Email</h4>
                    <p className="text-resort-mountain">info@kulekhanireport.com</p>
                    <p className="text-resort-mountain">bookings@kulekhaniresort.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-resort-forest mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'tripadvisor'].map(platform => (
                    <a
                      key={platform}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:transform hover:translate-y-[-3px] transition-all duration-300"
                      aria-label={`Follow us on ${platform}`}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${platform}/4A5568`}
                        alt={platform}
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium text-green-800 mb-2">Message Sent Successfully!</h4>
                  <p className="text-green-700">Thank you for reaching out. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-resort-forest mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-resort-forest mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-resort-forest mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-resort-forest mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="input-field resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`button-primary w-full flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
          <div className="h-[400px] bg-resort-stone/30 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.316716072695!2d85.13248213452232!3d27.614250422006167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb537996d29b45%3A0xab1ba6df41aef3e3!2sKulekhani%2C%20Nepal!5e0!3m2!1sen!2sus!4v1690994450051!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing location of Kulekhani Resort"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
