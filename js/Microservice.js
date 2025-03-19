
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});


const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.navbar-container').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});


document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('mouseenter', () => {
        service.querySelector('img').style.transform = 'scale(1.1)';
    });
    
    service.addEventListener('mouseleave', () => {
        service.querySelector('img').style.transform = 'scale(1)';
    });
});




function initServices() {
    const container = document.querySelector('.services-container');
    servicesData.forEach(service => {
        const card = document.createElement('section');
        card.className = 'service';
        card.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <h2>${service.title}</h2>
            <p>${service.description}</p>
            <a href="#" class="btn">Explore</a>
        `;
        container.appendChild(card);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    initServices();
    

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
});