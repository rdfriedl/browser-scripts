/**
 * Removes promoted posts
 */
setInterval(() => {
	document.querySelectorAll(".Post.promotedvideolink").forEach((el) => el.remove());
	document.querySelectorAll(".Post.promotedlink").forEach((el) => el.remove());
}, 500);
