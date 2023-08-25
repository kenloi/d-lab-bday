const messageContainer = document.getElementById('messageContainer');
const month = 'August'; // Set the current month here
const names = ['ARUSHI', 'ERIN', 'RON', 'JULIA', 'MARENA', 'HANNAH']; // Add all the names here

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360); // Hue value [0, 360]
    const saturation = 80 + Math.floor(Math.random() * 21); // Saturation value [80, 100]
    const lightness = 40 + Math.floor(Math.random() * 21); // Lightness value [40, 60]
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}


async function animate() {
const messages = [
    { text: `Happy ${month}!!!`, class: 'message-month' },
    { text: `To all the ${month} babies...`, class: 'message-babies' },
    ...names.map((name) => ({
    text: name,
    class: 'message-name',
    color: getRandomColor()
    })),
    { text: 'HAVE A HAPPY BIRTHDAY!!!', class: 'message-happy-birthday' }
];

for (const { text, class: className, color } of messages) {
    await new Promise((resolve) => {
    setTimeout(() => {
        const div = document.createElement('div');
        div.className = className;
        div.textContent = text;
        if (color) div.style.color = color; // Apply color if defined
        messageContainer.appendChild(div);

        // Apply the transition/animation
        requestAnimationFrame(() => {
          div.style.opacity = 1;
          div.style.transform = 'translateX(0)';
        });

        // Wait for the transition/animation to complete
        setTimeout(resolve, 500);
    }, 1000); // Change the delay between messages here
    });
}

}
  

animate();
