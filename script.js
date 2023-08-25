const messageElement = document.getElementById('message');
const nameContainer = document.getElementById('nameContainer');
const names = ['ARUSHI!!!', 'ERIN!!!', 'RON!!!', 'JULIA!!!', 'MARENA!!!', 'HANNAH']; // Add all the names here

function showMessage(message, fontSize, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      messageElement.textContent = message;
      messageElement.style.fontSize = fontSize + 'px';
      resolve();
    }, delay);
  });
}

const positions = [];

function getRandomPosition() {
  const padding = 900; // Edge padding
  const centerPadding = 200; // Padding around the center message
  const nameHeight = 72; // Height of the name elements

  let top, left, overlapping;

  do {
    top = Math.floor(Math.random() * (window.innerHeight - padding * 2)) + padding;
    left = Math.floor(Math.random() * (window.innerWidth - padding * 2)) + padding;

    // Check for overlap with the center message
    overlapping = (
      top > window.innerHeight / 2 - centerPadding &&
      top < window.innerHeight / 2 + centerPadding &&
      left > window.innerWidth / 2 - centerPadding &&
      left < window.innerWidth / 2 + centerPadding
    );

    // Check for overlap with other names
    for (const pos of positions) {
      if (
        top < pos.top + nameHeight && top + nameHeight > pos.top &&
        left < pos.left + nameHeight && left + nameHeight > pos.left
      ) {
        overlapping = true;
        break;
      }
    }
  } while (overlapping);

  positions.push({ top, left });
  return { top: top + 'px', left: left + 'px' };
}
  
  
function showName(name, delay) {
return new Promise((resolve) => {
    setTimeout(() => {
    const div = document.createElement('div');
    div.className = 'name';
    div.textContent = name;
    div.style.fontSize = '72px'; // Biggest font size for names
    const position = getRandomPosition();
    div.style.top = position.top;
    div.style.left = position.left;
    div.style.opacity = 1;
    nameContainer.appendChild(div);
    resolve();
    }, delay);
});
}


async function animate() {
  await showMessage('Happy August!!!', 36, 0);
  await showMessage('Happy birthday...', 48, 1000); // Change the delay as needed
  for (const [index, name] of names.entries()) {
    await showName(name, index * 800); // Change the delay between names here
  }
}

animate();
