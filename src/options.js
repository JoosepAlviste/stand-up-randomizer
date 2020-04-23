function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    members: document.querySelector('#members').value,
  });

  // Show a success message that dissapears after 3s
  document.querySelector('#randomizer-button').innerHTML = `
    <svg class="randomizer-check" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    <span>Saved!</span>
  `;

  setTimeout(() => {
    document.querySelector('#randomizer-button').innerHTML = 'Save';
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
