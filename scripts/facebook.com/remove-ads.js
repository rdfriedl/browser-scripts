/**
 * this script looks for posts with either "Suggested for You" or "Sponsored" in the title and removes them
 */
setInterval(() => {
	const posts = document.querySelectorAll("[role=article]");

	Array.from(posts).forEach((el) => {
		const descriptions = el.attributes.getNamedItem("aria-describedby")?.value.split(" ") ?? [];
		const isSuggested = !!el.querySelector("span[dir=auto]")?.textContent.match(/suggested for you/i);
		const isSponsored = !!descriptions.find((id) =>
			document.getElementById(id)?.textContent.replace(/-/g, "").includes("Sponsored")
		);

		if (isSponsored || isSuggested) el.remove();
	});
}, 500);
