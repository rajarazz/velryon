import { useEffect, useRef } from "react";

export default function NeuralBackground({
  className = "",
  color = "#6366f1",
  trailOpacity = 0.15,
  particleCount = 600,
  speed = 1,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let particles = [];
    let rafId;

    // pointer state (GLOBAL)
    let mouse = { x: -1000, y: -1000 };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = initial ? Math.random() * 100 : 0;
        this.life = Math.random() * 200 + 100;
      }

      update() {
        // FLOW FIELD
        const angle =
          (Math.cos(this.x * 0.005) +
            Math.sin(this.y * 0.005)) *
          Math.PI;

        this.vx += Math.cos(angle) * 0.2 * speed;
        this.vy += Math.sin(angle) * 0.2 * speed;

        // ✅ EXACT ORIGINAL MOUSE REPULSION
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150;

        if (distance < interactionRadius) {
          const force =
            (interactionRadius - distance) / interactionRadius;

          this.vx -= dx * force * 0.05;
          this.vy -= dy * force * 0.05;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.vx *= 0.95;
        this.vy *= 0.95;

        this.age++;
        if (this.age > this.life) this.reset();

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        const alpha =
          1 - Math.abs(this.age / this.life - 0.5) * 2;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, 1.5, 1.5);
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      width = container.clientWidth;
      height = container.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = `rgba(0,0,0,${trailOpacity})`;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        p.update();
        p.draw();
      }

      rafId = requestAnimationFrame(animate);
    };

    // ✅ GLOBAL POINTER EVENTS (THIS FIXES EVERYTHING)
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onTouchMove = (e) => {
      const t = e.touches[0];
      mouse.x = t.clientX;
      mouse.y = t.clientY;
    };

    const leave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    init();
    animate();

    window.addEventListener("resize", init);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", leave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", leave);
    };
  }, [color, trailOpacity, particleCount, speed]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-full h-full overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
