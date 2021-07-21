(function() {
	var t = document.createElement("script");
	t.type = "text/javascript";
	t.src =
		"https://growthphysics.s3.us-west-1.amazonaws.com/dist/growthphysics.js";
	t.async = !0;
	t.defer = !0;

	var n = document.getElementsByTagName("script")[0];
	n.parentNode.insertBefore(t, n);
	window.onload = function() {
		if (!window.GrowthPhysics) {
			console.error("frontend tracker was not loaded");
		} else {
			const ft = window.GrowthPhysics;
			ft.init("https://lamda-func-url.us-east-2.amazonaws.com/track");
			ft.track("Email Entered", { email: email }, []);
		}
	};
})();
