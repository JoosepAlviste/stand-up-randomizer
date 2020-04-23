function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    members: document.querySelector('#members').value,
  });

  // Show a success message that dissapears after 3s
  document.querySelector('#messages').innerHTML =
    '<div style="color: green;">Saved!</div>';
  setTimeout(() => {
    document.querySelector('#messages').innerHTML = '';
  }, 3000);
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector('#members').value = result.members || '';
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get('members');
  getting.then(setCurrentChoice, onError);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);
