const messageElement = document.getElementById('message');
const nameContainer = document.getElementById('nameContainer');
const names = ['ARUSHI!!!', 'ERIN!!!!']; // Add all the names here

function showMessage(message, fontSize, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      messageElement.textContent = message;
      messageElement.style.fontSize = fontSize + 'px';
      resolve();
    }, delay);
  });
}

function showName(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'name';
      div.textContent = name;
      div.style.fontSize = '72px'; // Biggest font size for names
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
    await showName(name, index * 2000); // Change the delay between names here
  }
}

animate();
