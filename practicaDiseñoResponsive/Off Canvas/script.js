const btn = document.getElementById("btnMenu");
const sidePanel = document.getElementById("sidePanel");

btn.addEventListener("click", () => {
  sidePanel.classList.toggle("open");
});
