document.querySelectorAll(".play-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const audio = btn.closest(".audio-item").querySelector("audio");
    
  
    document.querySelectorAll("audio").forEach((a) => {
      if (a !== audio) {
        a.pause();
        a.currentTime = 0;
      }
    });

    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 10000); 
  });
});

document.getElementById("secret-btn").addEventListener("click", () => {
  window.location.href = "entrada.html";
});

document.querySelectorAll(".entrada-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const seta = header.querySelector(".seta");

    content.classList.toggle("active");

    if (content.classList.contains("active")) {
      seta.textContent = "▼";
    } else {
      seta.textContent = "▶";
    }
  });
});
