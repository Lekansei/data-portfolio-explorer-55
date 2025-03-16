
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
    
    // Using public keys for EmailJS - these are safe to expose in front-end code
    const result = await emailjs.send(
      "service_7qwjkrc",      // Service ID from EmailJS
      "template_p4hsd4p",     // Template ID from EmailJS
      templateParams,
      "xMgwa06HtdQmx4wMq"     // Updated Public key from EmailJS
    );
    
    if (result.status === 200) {
      return {
        success: true,
        message: "Email envoyé avec succès à melchmanu@gmail.com!"
      };
    } else {
      return {
        success: false,
        message: "Échec de l'envoi de l'email. Veuillez réessayer plus tard."
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Échec de l'envoi de l'email. Veuillez réessayer plus tard."
    };
  }
};
