function redirectToOldReddit(requestDetails) {
	const url = requestDetails.url;

	return {
		redirectUrl: url.replace("www", "old")
	};
}

chrome.webRequest.onBeforeRequest.addListener(
	redirectToOldReddit,
	{
		urls: [
			"http://reddit.com/*",
			"http://www.reddit.com/*",
			"https://reddit.com/*",
			"https://www.reddit.com/*",
		]
	},
	["blocking"]
);
