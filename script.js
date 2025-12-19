document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id.length > 1) {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});

function openVideo(publicId, orientation = "landscape") {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");
  const wrapper = document.getElementById("videoWrapper");

  // RESET FIRST
  wrapper.style.cssText = "";

  if (orientation === "portrait") {
    /* MOBILE-FIRST PORTRAIT (REELS STYLE) */
    wrapper.style.width = "100vw";
    wrapper.style.height = "90vh";
    wrapper.style.maxWidth = "420px";
  } else {
    /* LANDSCAPE */
    wrapper.style.width = "95vw";
    wrapper.style.maxWidth = "1100px";
    wrapper.style.aspectRatio = "16 / 9";
  }

  frame.src =
    "https://player.cloudinary.com/embed/?" +
    "cloud_name=dcqktwoqz" +
    "&public_id=" + publicId +
    "&autoplay=true";

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");
  const wrapper = document.getElementById("videoWrapper");

  frame.src = "";
  wrapper.style.cssText = "";
  modal.classList.add("hidden");
}
