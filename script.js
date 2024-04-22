// Add active class to nav links on click
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		link.classList.add("active");
	});
});
