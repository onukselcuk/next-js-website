var Tawk_API = Tawk_API || {};
Tawk_API.onChatStarted = function () {
	if (dataLayer) {
		dataLayer.push({ event: "chatStarted" });
	}
};
