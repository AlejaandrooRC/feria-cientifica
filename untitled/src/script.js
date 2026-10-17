window.addEventListener('DOMContentLoaded', () => {
  /* Animación decorativa de red de sensores de fondo con aspecto de fragmentos fósiles */
  const canvas = document.getElementById('grid3dCanvas');
  if (canvas) {
    const cctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const points = [];

    for (let i = 0; i < 25; i++) {
      points.push({ 
        x: Math.random() * w, 
        y: Math.random() * h, 
        vx: (Math.random() - 0.5) * 0.3, 
        vy: (Math.random() - 0.5) * 0.3 
      });
    }

    function drawGridNetwork() {
      cctx.clearRect(0, 0, w, h);
      cctx.strokeStyle = 'rgba(66, 79, 70, 0.2)';
      cctx.fillStyle = 'rgba(223, 159, 40, 0.3)';

      points.forEach((p, idx) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        cctx.beginPath(); 
        // Dibujamos pequeños cuadrados en lugar de círculos para darle aspecto rocoso / fragmentado
        cctx.rect(p.x, p.y, 3, 3); 
        cctx.fill();

        for (let j = idx + 1; j < points.length; j++) {
          let p2 = points[j];
          let d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 180) {
            cctx.beginPath();
            cctx.moveTo(p.x, p.y);
            cctx.lineTo(p2.x, p2.y);
            cctx.stroke();
          }
        }
      });
      requestAnimationFrame(drawGridNetwork);
    }
    drawGridNetwork();

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }
});