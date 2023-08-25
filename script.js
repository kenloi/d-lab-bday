const messageContainer = document.getElementById('messageContainer');
const month = 'August'; // Set the current month here
const names = ['ARUSHI!!!', 'ERIN!!!!', 'RON', 'JULIA', 'MARENA', 'HANNAH']; // Add all the names here

async function animate() {
  const messages = [
    `Happy ${month}`,
    `To all the ${month} babies...`,
    ...names,
    '[HAPPY BIRTHDAY]'
  ];

  for (const message of messages) {
    await new Promise((resolve) => {
      setTimeout(() => {
        const div = document.createElement('div');
        div.className = 'message';
        div.textContent = message;
        messageContainer.appendChild(div);
        resolve();
      }, 2000); // Change the delay between messages here
    });
  }
}

animate();
