window.addEventListener('DOMContentLoaded', () => {
  
  /* --- EFECTO DE LÍNEAS DE VELOCIDAD ESTILO ANIME SUAVE (CANVAS) --- */
  const canvas = document.getElementById('animeSpeedCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    
    const lines = [];
    const maxLines = 25;

    for (let i = 0; i < maxLines; i++) {
      lines.push({
        x: Math.random() * w,
        y: Math.random() * h,
        length: 80 + Math.random() * 150,
        speed: 8 + Math.random() * 12 // Movimiento suave de atmósfera anime
      });
    }

    function renderAnimeSpeed() {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = 'rgba(169, 50, 50, 0.05)'; // Tono carmín translúcido
      ctx.lineWidth = 1;

      lines.forEach(l => {
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x - l.length, l.y);
        ctx.stroke();

        l.x += l.speed;

        if (l.x - l.length > w) {
          l.x = 0;
          l.y = Math.random() * h;
          l.length = 80 + Math.random() * 150;
          l.speed = 8 + Math.random() * 12;
        }
      });

      requestAnimationFrame(renderAnimeSpeed);
    }
    renderAnimeSpeed();

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }
});
