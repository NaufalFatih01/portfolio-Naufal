// GANTI nomor di bawah dengan nomor WhatsApp kamu.
// Gunakan format internasional tanpa tanda +, spasi, atau angka 0 di depan.
// Contoh Indonesia: 6281234567890
const whatsappNumber = "62895336055445";
const whatsappMessage = "Halo Naufal, saya sudah melihat portofolio kamu. Saya ingin berdiskusi lebih lanjut.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
document.getElementById("whatsappButton").href = whatsappUrl;
document.getElementById("floatingWa").href = whatsappUrl;

document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// Animasi elemen ketika masuk layar
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Progress bar saat halaman digulir
window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.getElementById("scrollProgress").style.width = `${progress}%`;
});

// Penanda menu sesuai bagian yang sedang dilihat
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => sectionObserver.observe(section));
