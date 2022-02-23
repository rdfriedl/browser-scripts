/**
 * Update the file download buttons be direct download
 */
const thingId = location.pathname.match(/thing:(\d+)/)[1];
const token = "56edfc79ecf25922b98202dd79a291aa";

async function fixDownloadLinks() {
	const fileList = document.querySelector('[class*="ThingFilesList__fileList"]');
	if (fileList.fixed) return;

	const files = await fetch(`https://api.thingiverse.com/things/${thingId}/files`, {
		headers: { authorization: `Bearer ${token}` },
	}).then((res) => res.json());

	Array.from(fileList.children).forEach((thingFileRow) => {
		const title = thingFileRow.querySelector('[class*="ThingFile__fileName"]').title;
		const file = files.find((f) => f.name === title);

		if (file) {
			const downloadLink = thingFileRow.querySelector('a[class*="ThingFile__download"]');
			downloadLink.onclick = (e) => e.stopPropagation();
			downloadLink.href = file.direct_url;
			downloadLink.download = file.name;
		}
	});

	fileList.fixed = true;
}

setInterval(() => {
	if (location.pathname.includes("/file")) {
		fixDownloadLinks();
	}
}, 1000);
