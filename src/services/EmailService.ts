
/**
 * Service pour gérer l'envoi d'e-mails via le formulaire de contact
 * Pour une implémentation réelle, vous pouvez utiliser EmailJS, SendGrid ou un autre service
 */

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Simulation d'envoi d'email
    // Dans une implémentation réelle, ceci serait remplacé par un appel API à un service d'e-mail
    console.log("Sending email with data:", data);
    
    // Pour tester, on simule un délai
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Succès simulé
    return {
      success: true,
      message: "Email sent successfully!"
    };
    
    /* 
    // Exemple d'implémentation avec EmailJS
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: "Manuel Melchiori",
      to_email: "melchmanu@gmail.com"
    };
    
    await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      templateParams,
      "YOUR_USER_ID"
    );
    
    return {
      success: true,
      message: "Email sent successfully!"
    };
    */
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later."
    };
  }
};
