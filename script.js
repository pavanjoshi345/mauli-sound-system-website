document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  menu.addEventListener("click", () => nav.classList.toggle("open"));

  document.querySelectorAll(".nav a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const event = document.getElementById("event").value.trim() || "कार्यक्रम";
    const date = document.getElementById("date").value || "नंतर ठरवू";
    const message = document.getElementById("message").value.trim() || "साऊंड व लाईटिंग सेवेसाठी चौकशी.";
    const text = `नमस्कार माऊली साऊंड सिस्टीम,%0A%0Aनाव: ${name}%0Aमोबाईल: ${phone}%0Aकार्यक्रम: ${event}%0Aतारीख: ${date}%0Aसंदेश: ${message}`;
    window.open(`https://wa.me/918806855289?text=${text}`, "_blank");
  });

  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav a");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.remove("active"));
        const active = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }, {threshold: 0.35});
  sections.forEach(section => observer.observe(section));
});