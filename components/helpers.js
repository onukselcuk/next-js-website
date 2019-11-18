const supportsWebp = () => {
	const selector = document.querySelector("html");
	if (selector.classList.contains("webp")) {
		return true;
	} else {
		return false;
	}
};

export { supportsWebp };
