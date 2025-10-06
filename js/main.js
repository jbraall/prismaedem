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
    function sendEmail(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const mailtoLink = `mailto:jabral@edem.es?subject=Contacto desde Web Prisma - ${name}&body=Nombre: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMensaje:%0D%0A${message}`;
        
        window.location.href = mailtoLink;
        
        // Opcional: resetear el formulario después de un breve delay
        setTimeout(() => {
            document.getElementById('contact-form').reset();
        }, 1000);
    }
});
