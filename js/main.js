// Menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        const mailtoLink = `mailto:jabral@edem.es?subject=Contacto desde Web Prisma - ${name}&body=${message}%0D%0A%0D%0A${name}-${phone}`;
        
        window.location.href = mailtoLink;
        
        // Resetear el formulario después de un breve delay
        setTimeout(() => {
            contactForm.reset();
        }, 1000);
    });
});
