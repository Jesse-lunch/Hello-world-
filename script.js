// Add active class to nav links on click
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		link.classList.add("active");
	});
});
// Add rain drops
for (let i = 0; i < 100; i++) {
	const rainDrop = document.createElement("div");
	rainDrop.className = "rain-drop";
	rainDrop.style.left = Math.random() * 100 + "%";
	rainDrop.style.top = Math.random() * 100 + "%";
	document.querySelector(".rain-background").appendChild(rainDrop);
}

// Animate rain drops
setInterval(() => {
	const rainDrops = document.querySelectorAll(".rain-drop");
	rainDrops.forEach((rainDrop) => {
		rainDrop.style.top = parseInt(rainDrop.style.top) + 1 + "px";
		if (parseInt(rainDrop.style.top) > window.innerHeight) {
			rainDrop.style.top = "-10px";
		}
	});
}, 30);
