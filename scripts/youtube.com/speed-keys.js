/**
 * This script adds playback speed shortcuts to youtube.
 * Numpad / set speed to 1x
 * Numpad * set speed to 2x
 * Numpad - set speed to 1.5x
 * G set speed to 1x
 * H set speed to 2x
 */

import { wait } from "../utils/async.js";

function findMenuItem(label) {
	return Array.from(document.querySelectorAll(".ytp-settings-menu .ytp-menuitem")).find(
		(el) => String(el.querySelector(".ytp-menuitem-label").textContent) === label
	);
}

const isMenuOpen = () => {
	return document.querySelector(".ytp-settings-menu").style.display !== "none";
};

async function setPlaybackSpeed(speed = "Normal") {
	const delay = 200;
	let menuButton = document.querySelector("#movie_player .ytp-chrome-controls .ytp-settings-button");
	if (isMenuOpen()) {
		menuButton.click();
		await wait(delay);
	}
	menuButton.click();
	await wait(delay);
	findMenuItem("Playback speed").click();
	await wait(delay);
	findMenuItem(speed).click();
	await wait(delay);
	isMenuOpen() && menuButton.click();
}

const keymap = {
	NumpadMultiply: "2",
	NumpadDivide: "Normal",
	NumpadSubtract: "1.5",
	KeyG: 'Normal',
	KeyH: '2'
};

document.addEventListener("keydown", (event) => {
	let speed = keymap[event.code];
	if (speed) {
		console.log(`setting speed to ${speed}`);
		setPlaybackSpeed(speed);
	}
});
