(function() {
  /**
   * Shuffle an array.
   *
   * Copied from a Stackoverflow post :)
   */
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  /**
   * Get a randomized list of people from the settings.
   * @param {string} members
   * @returns {string[]}
   */
  function getPeople(members) {
    const people = [...members.trim().split('\n')];

    shuffleArray(people);

    return people;
  }

  /**
   * Start the randomizer.
   * @param {{
   *  members: string
   * }} members
   */
  function openRandomizer({ members }) {
    const $container = document.createElement('div');
    $container.className = 'randomizer-container';
    $container.id = 'randomizer-container';

    const people = getPeople(members);
    let nextIndex = 0;

    const isLast = () => nextIndex === people.length - 1;

    const render = () => {
      const $nameContainer = document.createElement('div');
      $nameContainer.className = 'randomizer-name';
      $nameContainer.appendChild(document.createTextNode(people[nextIndex]));

      const $button = document.createElement('button');
      $button.id = 'randomizer-next-btn';
      $button.className = 'randomizer-button';
      $button.appendChild(
        document.createTextNode(
          isLast() ? 'Done' : `Next: ${people[nextIndex + 1]}`
        )
      );

      $container.innerHTML = '';
      $container.appendChild($nameContainer);
      $container.appendChild($button);
    }

    document.body.appendChild($container);

    if (people.length) {
      render();

      $container.addEventListener('click', (e) => {
        if (e.target.id === 'randomizer-next-btn') {
          if (isLast()) {
            $container.remove();
          } else {
            nextIndex += 1;

            render();
          }
        }
      });
    }
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  browser.storage.sync.get('members').then(openRandomizer, onError);
})();
