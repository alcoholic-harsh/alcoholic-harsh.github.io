document.addEventListener("DOMContentLoaded", () => {
  // smooth scroll
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
  if (orientation === "portrait") {
    // Height-capped (not width-capped) so tall 9:16 videos never
    // overflow the viewport on wide/short screens (e.g. laptops) —
    // this is what keeps the close (✕) button visible.
    wrapper.className = "modal-wrapper-portrait";
  } else {
    wrapper.className = "modal-wrapper-landscape";
  }
  frame.src =
    "https://player.cloudinary.com/embed/?cloud_name=dcqktwoqz" +
    "&public_id=" + publicId +
    "&autoplay=true";
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}
function closeVideo() {
  document.getElementById("videoFrame").src = "";
  document.getElementById("videoModal").classList.add("hidden");
}
