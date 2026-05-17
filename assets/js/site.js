const heroGrid = document.querySelector(".hero-grid");

if (heroGrid && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
  const cells = [...heroGrid.children];
  let step = 0;

  window.setInterval(() => {
    cells.forEach((cell, index) => {
      const active = (index + step) % 5 === 0;
      cell.style.transform = active ? "translateY(-0.18rem)" : "translateY(0)";
      cell.style.background = active ? "rgba(241, 184, 75, 0.24)" : "";
    });
    step += 1;
  }, 900);
}
