// Mobile menu
function toggleMenu(){
    document.querySelector(".nav-links").classList.toggle("active");
}

// Fade-in animation
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
},{ threshold:0.2 });

faders.forEach(fader=> appearOnScroll.observe(fader));

// Flip cards
document.querySelectorAll(".flip-card").forEach(card=>{
    card.addEventListener("click", ()=>{
        card.classList.toggle("active");
    });
});
