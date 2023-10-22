window.onload = () => {
  setTimeout(() => {
    const loader = document.getElementById("preload");
    loader.style.opacity = "0";
  }, 300);
  setTimeout(() => {
    const loader = document.getElementById("preload");
    loader.style.display = "none";
    loader.removeAttribute("class");
  }, 600);
};
