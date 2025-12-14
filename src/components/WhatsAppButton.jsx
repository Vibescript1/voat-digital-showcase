import { MessageCircle } from "lucide-react";

export const WhatsAppButton = ({ position = "fixed" }) => {
  const phoneNumber = "7799770919";
  const message = "Hello! I have a question about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${position === "fixed"
          ? "fixed bottom-6 right-6 md:bottom-8 md:right-8"
          : "absolute top-6 right-6 md:top-8 md:right-8"}
        bg-green-500 hover:bg-green-600
        text-white
        p-4 md:p-4
        rounded-full
        shadow-lg z-50
        transition-all duration-300
        hover:shadow-xl hover:scale-110
        flex items-center justify-center
      `}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />
    </a>
  );
};
