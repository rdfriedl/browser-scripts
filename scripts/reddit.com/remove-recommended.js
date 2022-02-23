/**
 * Remove the "Some redditors find this funny", "Similar to", and other recommended posts
 */
setInterval(() => {
	Array.from(document.querySelectorAll(".Post"))
		.filter((el) => !!el.querySelector("[data-click-id=background]>*:first-child.RichTextJSON-root"))
		.forEach((el) => el.remove());
}, 500);
