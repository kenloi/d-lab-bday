const messageContainer = document.getElementById('messageContainer');
const month = 'August'; // Set the current month here
const names = ['ARUSHI!!!', 'ERIN!!!!', 'RON', 'JULIA', 'MARENA', 'HANNAH']; // Add all the names here

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  async function animate() {
    const messages = [
      { text: `Happy ${month}`, class: 'message-month' },
      { text: `To all the ${month} babies...`, class: 'message-babies' },
      ...names.map((name) => ({
        text: name,
        class: 'message-name',
        color: getRandomColor()
      })),
      { text: '[HAPPY BIRTHDAY]', class: 'message-happy-birthday' }
    ];
  
    for (const { text, class: className, color } of messages) {
      await new Promise((resolve) => {
        setTimeout(() => {
          const div = document.createElement('div');
          div.className = className;
          div.textContent = text;
          if (color) div.style.color = color; // Apply color if defined
          messageContainer.appendChild(div);
          resolve();
        }, 2000); // Change the delay between messages here
      });
    }
  }
  

animate();
