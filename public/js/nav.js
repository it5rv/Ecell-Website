const open = document.querySelector('#nav-menu-open');
const close = document.querySelector('.close-overlay');
const menu = document.querySelector('.nav-menu');
const mobileNav = () => {
    menu.classList.toggle('nav-menu--show');
    close.classList.toggle('display');
    document.body.classList.toggle('scroll-none');
}

open.addEventListener('click', mobileNav);

close.addEventListener('click', mobileNav);

const navLogo = document.querySelector('.nav-logo');
const exploreBtn = document.querySelector('.home-explore');
const about = document.querySelector('#home > nav > div.nav-menu > span:nth-child(1)');
const upcomingEvent = document.querySelector('#home > nav > div.nav-menu > span:nth-child(2)');
const event = document.querySelector('#home > nav > div.nav-menu > span:nth-child(3)');
const wing = document.querySelector('#home > nav > div.nav-menu > span:nth-child(4)');
const gallery = document.querySelector('#home > nav > div.nav-menu > span:nth-child(5)');
const startup = document.querySelector('#home > nav > div.nav-menu > span:nth-child(6)');
const testimonial = document.querySelector('#home > nav > div.nav-menu > span:nth-child(7)');
const team = document.querySelector('#home > nav > div.nav-menu > span:nth-child(8)');
const contact = document.querySelector('#home > nav > div.nav-menu > span:nth-child(9)');
const homeSection = document.querySelector('#home');
const aboutSection = document.querySelector('#about');
const upcomingEventSection = document.querySelector('#upcomingEvents');
const eventSection = document.querySelector('#events');
const wingSection = document.querySelector('#wings');
const startupSection = document.querySelector('#ourstar');
const gallerySection = document.querySelector('#portfolio');
const testSection = document.querySelector('#testimonials');
const contactSection = document.querySelector('#contact-form');

team.addEventListener('click', e => {
    e.preventDefault();
    window.location = "team/index.html";
})

navLogo.addEventListener('click', () => {
    homeSection.scrollIntoView();
});
about.addEventListener('click', () => {
    aboutSection.scrollIntoView();
    if (screen.width <= 888) {
        mobileNav();
    }
});
upcomingEvent.addEventListener('click', () => {
    upcomingEventSection.scrollIntoView();
    if (screen.width <= 888) {
        mobileNav();
    }
});
event.addEventListener('click', () => {
    eventSection.scrollIntoView();
    if (screen.width <= 888) {
        mobileNav();
    }
});
exploreBtn.addEventListener('click', () => {
    aboutSection.scrollIntoView();
});
wing.addEventListener('click', () => {
    wingSection.scrollIntoView();
    if (screen.width <= 888) {
        mobileNav();
    }
});
startup.addEventListener('click', () => {
    startupSection.scrollIntoView();
    if (screen.width <= 888) {
        mobileNav();
    }
});
gallery.addEventListener('click', () => {
    gallerySection.scrollIntoView();
    if (screen.width <= 888) {
        mobileNav();
    }
});
testimonial.addEventListener('click', () => {
    testSection.scrollIntoView();
    if (screen.width <= 888) {
        mobileNav();
    }
});
contact.addEventListener('click', () => {
    contactSection.scrollIntoView();
    if (screen.width <= 888) {
        mobileNav();
    }
});

const homeOptions = {
    rootMargin: "-70% 0px 0px 0px"
};
const navBar = document.querySelector('nav');
const homeObserver = new IntersectionObserver((sections) => {
    sections.forEach(section => {
        // console.log(section.target);
        if (!section.isIntersecting) {
            navBar.classList.add('scrolled');
            navLogo.src = "images/ecell-logo/e.svg";
            open.src = "icons/menu-b.png";
        } else {
            navBar.classList.remove('scrolled');
            navLogo.src = "images/ecell-logo/e-white.svg";
            open.src = "icons/menu-white.png";
        }
    });
}, homeOptions);

homeObserver.observe(homeSection);