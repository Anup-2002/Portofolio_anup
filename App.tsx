import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const handleContactSubmit = async (method, { from_name, reply_to, message, contact_method }) => {
    if (method === 'email') {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, { from_name, reply_to, message, contact_method }, PUBLIC_KEY);
    }
    // Existing WhatsApp behavior
    const whatsappUrl = 'https://wa.me/918999881962';
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};

// ... (existing content of App.tsx)