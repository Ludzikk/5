document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const navBar = document.querySelector(".navbar-collapse");
	const navLink = document.querySelectorAll(".nav-link");

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}
    
    navLink.forEach(link => link.addEventListener("click", () => navBar.classList.remove("show")))

	window.addEventListener("scroll", addShadow);
});