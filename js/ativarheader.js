document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const logo = document.querySelector(".logo");
    const sections = document.querySelectorAll("section");

    // Função para ativar o link correto ao rolar a página
    function activateLinkOnScroll() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                links.forEach(link => link.classList.remove("active"));
                document.querySelector(`nav a[href="#${sectionId}"]`).classList.add("active");
            }
        });
    }

    // Adiciona evento de clique nos links
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Remove 'active' de todos os links ao clicar na logo
    logo.addEventListener("click", function () {
        links.forEach(item => item.classList.remove("active"));
    });

    // Detecta rolagem da página e ativa o link correto
    window.addEventListener("scroll", activateLinkOnScroll);
});