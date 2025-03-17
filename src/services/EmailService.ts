
/**
 * Service pour gérer l'envoi d'e-mails via le formulaire de contact
 * Utilisation d'une solution simplifiée pour les emails
 */

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log("Sending email with data:", data);
    
    // Pour simplifier, on utilise un service de redirection d'email via mailto
    // Cette approche ouvre le client email de l'utilisateur, mais évite la complexité 
    // d'intégrer un service tiers comme EmailJS qui nécessite une configuration complexe
    
    const subject = `Message du portfolio de ${data.name}`;
    const body = `
Nom: ${data.name}
Email: ${data.email}

Message:
${data.message}
    `;
    
    // Encodage des paramètres pour l'URL mailto
    const mailtoURL = `mailto:melchmanu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Ouvre le client email par défaut de l'utilisateur
    window.open(mailtoURL, '_blank');
    
    // Retourne un succès même si on ne peut pas garantir l'envoi (car c'est contrôlé par l'utilisateur)
    return {
      success: true,
      message: "Client de messagerie ouvert. Veuillez compléter l'envoi de votre message."
    };
  } catch (error) {
    console.error("Error preparing email:", error);
    return {
      success: false,
      message: `Échec de la préparation de l'email: ${error instanceof Error ? error.message : 'Erreur inconnue'}`
    };
  }
};
