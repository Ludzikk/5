const navMobile = document.querySelector(".nav-mobile__links");
const navHambur = document.querySelectorAll(".nav__hamburger-mobile");
const navLink = document.querySelectorAll(".nav__list-item-link");

console.log(navMobile);
console.log(navHambur);

const handleNav = () => {
	navMobile.classList.toggle("active");
    navMobile.classList.toggle("de-active");
    document.body.classList.toggle("sticky-body");


    navLink.forEach((item) => {
        item.addEventListener("click", () => {
            navMobile.classList.remove("active");
            document.body.classList.remove("sticky-body");
            navMobile.classList.add("de-active");
        });
    });
    
};

navHambur.forEach((item) => {
	item.addEventListener("click", handleNav);
});
