const names = ['Alice', 'Bob', 'Charlie']; // Add the names here
const container = document.getElementById('nameContainer');

function getRandomPosition() {
    const y = window.innerWidth;
    const x = window.innerHeight;
    return {
        top: Math.floor(Math.random() * x) + 'px',
        left: Math.floor(Math.random() * y) + 'px',
    };
}

names.forEach((name, index) => {
    setTimeout(() => {
        const div = document.createElement('div');
        div.className = 'name';
        div.textContent = name;
        const position = getRandomPosition();
        div.style.top = position.top;
        div.style.left = position.left;
        div.style.opacity = 1;
        container.appendChild(div);
    }, index * 2000); // Change the delay between names here
});
