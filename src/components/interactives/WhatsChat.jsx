import React, { useState } from "react";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import imgProfilePicture from "../../assets/favico/android-icon-192x192.png";
import "../../../src/index.css";
import { infos } from "../../content/content";

const whatsNumber = `${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}`;

export default function WhatsChat() {
  const [chatVisible, setChatVisible] = useState(true);

  const handleCloseChat = () => {
    // Oculta o chat e o exibe novamente após um curto intervalo
    setChatVisible(false);
    setTimeout(() => setChatVisible(true), 100); // Ajuste o tempo conforme necessário
  };

  return (
    <div>
      {chatVisible && (
        <FloatingWhatsApp
          status="w-3"
          chatboxHeight="auto"
          phoneNumber={whatsNumber}
          notification={true}
          notificationDelay={5}
          notificationLoop={2}
          accountName={infos.name}
          avatar={imgProfilePicture}
          initialMessageByServer={infos.whatsChatDefaultMessage}
          initialMessageByClient={infos.whatsappDefaultMessage}
          statusMessage="Disponível"
          startChatText="Falar no whatsapp"
          tooltipText={
            <p className="text-paragraph4">
              Disponível <strong>24h</strong> ashduahds
            </p>
          }
          allowEsc={true}
          className=""
          onClose={handleCloseChat} // Aciona ao fechar o chat
        />
      )}
    </div>
  );
}
