const modal = document.getElementById("videoModal");
const frame = document.getElementById("videoFrame");
const wrapper = document.getElementById("videoWrapper");

function openVideo(publicId, orientation = "landscape") {
  if (!modal) return;
  wrapper.className = orientation === "portrait" ? "modal-wrapper-portrait" : "modal-wrapper-landscape";
  frame.src = "https://player.cloudinary.com/embed/?cloud_name=dcqktwoqz&public_id=" + publicId + "&autoplay=true";
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeVideo() {
  if (!modal) return;
  frame.removeAttribute("src");
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  // portfolio cards
  document.querySelectorAll(".card").forEach(c =>
    c.addEventListener("click", () => openVideo(c.dataset.id, c.dataset.o)));

  // modal: close button, backdrop click, Esc key
  if (modal) {
    modal.querySelector(".modal-close").addEventListener("click", closeVideo);
    modal.addEventListener("click", e => { if (e.target === modal) closeVideo(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeVideo(); });
  }

  // featured videos on the home page: play only while visible
  const vids = document.querySelectorAll(".vcard video, .hero-media video");
  if (vids.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) en.target.play().catch(() => {});
      else en.target.pause();
    }), { threshold: 0.5 });
    vids.forEach(v => io.observe(v));
  }
});
