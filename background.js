function redirectToOldReddit(requestDetails) {
    let old_reddit_url = requestDetails.url
        .replace("://www.reddit.com", "://old.reddit.com")
        .replace("://reddit.com", "://old.reddit.com"); 

    return {
        redirectUrl: old_reddit_url
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
