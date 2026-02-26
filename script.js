// Mobile Menu
function toggleMenu(){
    document.querySelector(".nav-links").classList.toggle("active");
}

// Flip Cards
document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});

// Page Transition
document.addEventListener("DOMContentLoaded", function(){
    document.body.classList.add("page");

    document.querySelectorAll("a").forEach(link => {
        if(link.hostname === window.location.hostname){
            link.addEventListener("click", function(e){
                if(link.getAttribute("href").includes("#")) return;

                e.preventDefault();
                document.body.style.opacity = 0;
                setTimeout(() => {
                    window.location = link.href;
                }, 400);
            });
        }
    });
});
