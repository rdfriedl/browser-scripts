/**
 * Removes livestream posts from feed
 */
setInterval(() => {
	Array.from(document.querySelectorAll(".scrollerItem:not(.Post)"))
		.filter((el) => el.textContent.includes("livestream"))
		.forEach((el) => el.remove());
}, 500);
