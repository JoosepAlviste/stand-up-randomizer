browser.browserAction.onClicked.addListener(() => {
  browser.storage.sync.get('members').then(({members}) => {
    if (members && members.length) {
      browser.tabs.executeScript({
        file: 'src/randomizer.js',
      });
      browser.tabs.insertCSS({
        file: 'src/randomizer.css',
      });
    } else {
      browser.runtime.openOptionsPage();
    }
  });
});
