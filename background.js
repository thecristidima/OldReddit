function isNewRedditOnlyLink(url) {
    return url.includes("reddit.com/gallery")
        || url.includes("reddit.com/poll");
}

function redirectToOldReddit(requestDetails) {
    const url = requestDetails.url;

    if (isNewRedditOnlyLink(url)) {
        return {
            redirectUrl: url
        };
    }

    let old_reddit_url = url
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
