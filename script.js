const colors = ['#ffcc00', '#ff0000', '#00ff00', '#0000ff', '#ff00ff']; // Array of colors
const balls = [];

for (let i = 0; i < 5; i++) { // Create 5 balls
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.backgroundColor = colors[i]; // Assign color from the array
    document.body.appendChild(ball);
    
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let dx = Math.floor(Math.random() * 10) + 1;
    let dy = Math.floor(Math.random() * 10) + 1;

    balls.push({ element: ball, x, y, dx, dy });
}

function moveBalls() {
    balls.forEach(ball => {
        ball.x += ball.dx;
        ball.y += ball.dy;
        
        if (ball.x >= window.innerWidth - 20 || ball.x <= 0) {
            ball.dx = -ball.dx;
        }
        
        if (ball.y >= window.innerHeight - 20 || ball.y <= 0) {
            ball.dy = -ball.dy;
        }
        
        ball.element.style.left = ball.x + 'px';
        ball.element.style.top = ball.y + 'px';
    });
    
    requestAnimationFrame(moveBalls);
}

moveBalls();