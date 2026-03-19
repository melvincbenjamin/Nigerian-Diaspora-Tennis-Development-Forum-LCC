import React, { useState } from "react";

const WhatsappButton = () => {
  const whatsappNumber = "+1 862-576-4553";
  const [userType, setUserType] = useState("player");

  const messages = {
    player:
      "Hello! I am a tennis player in Nigeria interested in sponsorship and development opportunities. Please, Kindly provide more information.",
    sponsor:
      "Hello! I am interested in sponsoring or partnering to support tennis development in Nigeria. Kindly provide more information.",
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      
      {/* Selector */}
      <select
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        className="bg-white text-sm px-3 py-1 rounded-md shadow-md outline-none"
      >
        <option value="player">🎾 Player</option>
        <option value="sponsor">🤝 Sponsor</option>
      </select>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
          messages[userType]
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500 text-white
          rounded-full
          px-4 py-2
          flex items-center
          shadow-lg
          hover:bg-green-600
          transition-all duration-300
        "
      >
        <i className="bi bi-whatsapp text-2xl mr-2"></i>
        <span className="text-sm">Chat With Us</span>
      </a>
    </div>
  );
};

export default WhatsappButton;