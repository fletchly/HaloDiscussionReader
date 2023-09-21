async function getCurrentTab() {
let tab = await getCurrentTab();
}

chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ["js/readposts.js"]
    });
 });