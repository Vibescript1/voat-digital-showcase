import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = ({ position = 'fixed' }) => {
  const phoneNumber = '7799770919'; // Replace with your WhatsApp number
  const message = 'Hello! I have a question about your services.'; // Default message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${position === 'fixed' ? 'fixed bottom-8 right-8' : 'absolute top-8 right-8'} bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 hover:shadow-xl hover:scale-110`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};