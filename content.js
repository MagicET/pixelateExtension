const pics = document.querySelectorAll("img");
window.addEventListener('load', () => {
  for (const pic of pics) {
    const w = pic.naturalWidth;
    const h = pic.naturalHeight;
    if (w <= 256 || h <= 256) {
      pic.style.imageRendering = "pixelated"
    }
  }
}, false);