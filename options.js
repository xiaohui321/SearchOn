// Saves options to chrome.storage
function save_options() {
  var url = document.getElementById('url').value;
  var name = document.getElementById('name').value;
  chrome.storage.sync.set({
    name: name,
    url: url
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    name: 'Google',
    url: 'https://www.google.com/?q={keyword}'
  }, function(items) {
    document.getElementById('name').value = items.name;
    document.getElementById('url').value = items.url;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);