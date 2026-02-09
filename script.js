// Ano automático
    document.getElementById("year").textContent = new Date().getFullYear();

    // Menu mobile
    const menuBtn = document.getElementById("menuBtn");
    const navMobile = document.getElementById("navMobile");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      navMobile.classList.toggle("open");
    });

    // Fecha menu ao clicar em um link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        menuBtn.classList.remove("open");
        navMobile.classList.remove("open");
      });
    });

    // Fecha menu se clicar fora
    document.addEventListener("click", (e) => {
      const isClickInsideHeader = e.target.closest("header");
      if (!isClickInsideHeader) {
        menuBtn.classList.remove("open");
        navMobile.classList.remove("open");
      }
    });

    // Modal da galeria
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const closeModal = document.getElementById("closeModal");

    document.querySelectorAll(".shot").forEach((shot) => {
      shot.addEventListener("click", () => {
        const img = shot.querySelector("img");
        modalImg.src = img.src;
        modalTitle.textContent = shot.getAttribute("data-title") || "Foto";
        modal.classList.add("open");
      });
    });

    function closeModalFn(){
      modal.classList.remove("open");
      modalImg.src = "";
    }

    closeModal.addEventListener("click", closeModalFn);

    modal.addEventListener("click", (e) => {
      if(e.target === modal) closeModalFn();
    });

    document.addEventListener("keydown", (e) => {
      if(e.key === "Escape") closeModalFn();
    });