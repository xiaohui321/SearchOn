searchOn = function(selection){
  var query = selection.selectionText;
  chrome.storage.sync.get('url', function (items) {
    chrome.tabs.create({url: items.url.replace('{query}', query)});   
  });
};

chrome.storage.sync.get('name', function(items) {
  chrome.contextMenus.create({
    title: "Search on " + items.name,
    contexts:["selection"],
    onclick: searchOn
  });
});


