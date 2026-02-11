import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import {cn} from '@/lib/utils';
import {useToast} from '@/hooks/use-toast'
import { useRef, useState } from "react";


export const ContactSection = () => {

  const {toast} = useToast();
  const [isSubmitting , setIsSubmitting] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);


  const handleSubmit = (e)=>{
    e.preventDefault();
    setIsSubmitting(true)

    setTimeout(()=>{
      toast({
        title: "Message sent!",
        description : "Thank you for your message . I'll get back to you soon. ",
      })
      setIsSubmitting(false);
      nameRef.current.value="";
      emailRef.current.value="";
      messageRef.current.value="";
    },1500)

    
  }

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary" >Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaboration? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* left part */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-8 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:wultimate646@gmail.com"
                    className="text-muted-foreground hover:text-primary "
                  >
                    wultimate646@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919685102446"
                    className="text-muted-foreground hover:text-primary "
                  >
                    +91 9685102446
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    className="text-muted-foreground hover:text-primary "
                  >
                    Indore, Madhaya Pradesh
                  </a>
                </div>
              </div>

            </div>


            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/soumay-choudhary-b93112342/"
                  target="_blank"
                >
                  <Linkedin />
                </a>

                <a href="#" target="_blank">
                  <Twitter />
                </a>

                <a href="#" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* {right part} */}
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text"
                  id="name" 
                  name="name"
                  ref={nameRef}  
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                  placeholder="Soumay Choudhary..."
                  required 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input 
                  type="email"
                  id="email" 
                  name="email"
                  ref={emailRef}  
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                  placeholder="guest@gmail.com"
                  required 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  ref={messageRef} 
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary resize-none"
                  placeholder="Hello I'd like to talk about..."
                  required 
                />
              </div>

              <button 
                type="submit" 
                className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

            </form>

          </div>


        </div>
      </div>
    </section>
  )
}