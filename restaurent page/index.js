let menuIcon = document.getElementById("menu-icon");
let textCont = document.getElementById("text-cont");
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    textCont.classList.toggle("active");
}
window.onscroll = () => {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
    menuIcon.classList.remove("bx-x");
    textCont.classList.remove("active");
    textCont.style.background = "#0d2436";
}
document.getElementById("exploreButton").addEventListener("click", function() {
    // Scroll to Section 2 smoothly
    document.getElementById("exploresection").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("deliveryButton").addEventListener("click", function() {
    // Scroll to Section 2 smoothly
    document.getElementById("paymentsection").scrollIntoView({
        behavior: "smooth"
    });
});