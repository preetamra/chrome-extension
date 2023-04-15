console.log("backgroundjs ran");

let contextMenuItem = {
"id": "workTime",
"title": "WorkTime",
"contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function (clickData)  {
console.log("Work Time",clickData,chrome);
chrome.storage.sync.set({ content:clickData });
//chrome.document.getElementsByClassName("popup")[0].textContent = clickData;

chrome.windows.getCurrent().then((data) => {
    chrome.windows.create({
        url: 'popup.html',
        type: 'popup',
        width: 400,
        height: 300,
        left: Math.round((data.width - 400) / 2),
        top: Math.round((data.height - 300) / 2),
        
      });    
})

})

