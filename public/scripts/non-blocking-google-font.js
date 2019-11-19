WebFontConfig = {
	google: { families: [ "Laila:400,700", "Nunito:400,700" ] }
};
(function () {
	var wf = document.createElement("script");
	wf.src = "https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
	wf.type = "text/javascript";
	wf.async = "true";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(wf, s);
})();
