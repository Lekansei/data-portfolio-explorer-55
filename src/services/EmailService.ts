
/**
 * Service pour gérer l'envoi d'e-mails via le formulaire de contact
 * Utilisation d'EmailJS pour envoyer des emails depuis le front-end
 */

import emailjs from 'emailjs-com';

interface EmailData {
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
    
    // Remplacez ces valeurs par celles de votre compte EmailJS
    const result = await emailjs.send(
      "service_id",      // Remplacez par votre Service ID d'EmailJS
      "template_id",     // Remplacez par votre Template ID d'EmailJS
      templateParams,
      "user_id"          // Remplacez par votre User ID d'EmailJS
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
