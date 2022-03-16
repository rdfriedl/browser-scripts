const domain = location.hostname.replaceAll(/www\./g, "");
import(`./${domain}/index.js`).catch((e) => {
	console.log(`Failed to load script for ${domain}`);
});
