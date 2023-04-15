console.log("popup script",window.document.getElementById)

function updatePopup() {
    chrome.storage.sync.get(['content'], function (data) {
        window.document.getElementsByClassName("popup")[0].innerText = data.content.selectionText;
        console.log(data)
    });
}    
document.addEventListener('DOMContentLoaded', updatePopup);