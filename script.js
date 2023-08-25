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

function getRandomPosition() {
    const padding = 50; // Edge padding
    const centerPadding = 500; // Padding around the center message
  
    let top = 0;
    let left = 0;
  
    do {
      top = Math.floor(Math.random() * (window.innerHeight - padding * 2)) + padding;
      left = Math.floor(Math.random() * (window.innerWidth - padding * 2)) + padding;
    } while (
      top > window.innerHeight / 2 - centerPadding &&
      top < window.innerHeight / 2 + centerPadding &&
      left > window.innerWidth / 2 - centerPadding &&
      left < window.innerWidth / 2 + centerPadding
    );
  
    return {
      top: top + 'px',
      left: left + 'px',
    };
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
  await showMessage('Happy birthday...', 48, 2000); // Change the delay as needed
  for (const [index, name] of names.entries()) {
    await showName(name, index * 1000); // Change the delay between names here
  }
}

animate();
