
/**
 * Service pour gérer l'envoi d'e-mails via le formulaire de contact
 * Utilisation d'EmailJS pour envoyer des emails depuis le front-end
 */

import emailjs from 'emailjs-com';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log("Sending email with data:", data);
    
    // Configuration pour EmailJS
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: "Manuel Melchiori",
      to_email: "melchmanu@gmail.com"
    };
    
    // Vérification que EmailJS est bien initialisé
    console.log("EmailJS SDK présent:", typeof emailjs !== 'undefined');
    
    if (typeof emailjs !== 'object' || !emailjs.send) {
      console.error("EmailJS not properly initialized");
      return {
        success: false,
        message: "Service d'envoi d'e-mail non disponible. Veuillez réessayer plus tard."
      };
    }
    
    // Using public keys for EmailJS - these are safe to expose in front-end code
    const serviceId = "service_7qwjkrc";
    const templateId = "template_p4hsd4p";
    const publicKey = "xMgwa06HtdQmx4wMq";
    
    console.log("EmailJS configuration:", {
      serviceId,
      templateId,
      publicKey: publicKey ? "Present" : "Missing",
    });
    
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    
    console.log("EmailJS response:", result);
    
    if (result.status === 200) {
      return {
        success: true,
        message: "Email envoyé avec succès à melchmanu@gmail.com!"
      };
    } else {
      console.error("EmailJS error with status:", result.status);
      return {
        success: false,
        message: "Échec de l'envoi de l'email. Veuillez réessayer plus tard."
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: `Échec de l'envoi de l'email: ${error instanceof Error ? error.message : 'Erreur inconnue'}`
    };
  }
};
