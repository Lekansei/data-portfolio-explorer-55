
/**
 * Service pour gérer l'envoi d'e-mails via le formulaire de contact
 * Utilisation d'EmailJS pour envoyer des emails depuis le front-end
 */

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log("Sending email with data:", data);
    
    // Dans une implémentation réelle, vous devez remplacer cette simulation par l'intégration d'un service d'e-mail
    // Voici deux options:
    
    // Option 1: Envoi via EmailJS (recommandé)
    // Pour implémenter:
    // 1. Créez un compte sur emailjs.com
    // 2. Installez emailjs-com: npm install emailjs-com
    // 3. Décommentez et adaptez le code ci-dessous
    
    /*
    import emailjs from 'emailjs-com';
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: "Manuel Melchiori",
      to_email: "melchmanu@gmail.com"
    };
    
    const result = await emailjs.send(
      "YOUR_SERVICE_ID",      // Remplacez par votre Service ID d'EmailJS
      "YOUR_TEMPLATE_ID",     // Remplacez par votre Template ID d'EmailJS
      templateParams,
      "YOUR_USER_ID"          // Remplacez par votre User ID d'EmailJS
    );
    
    if (result.status === 200) {
      return {
        success: true,
        message: "Email envoyé avec succès!"
      };
    }
    */
    
    // Option 2: Utiliser un backend API (Firebase, AWS Lambda, etc.)
    // const response = await fetch('votre-url-api-backend', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // const result = await response.json();
    
    // Pour le moment, simulons un envoi réussi
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Succès simulé
    return {
      success: true,
      message: "Email envoyé avec succès à melchmanu@gmail.com!"
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Échec de l'envoi de l'email. Veuillez réessayer plus tard."
    };
  }
};
