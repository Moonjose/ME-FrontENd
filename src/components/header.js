export function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    header.innerHTML = `
        <nav class="header-nav">

        <div class="logo">
            <img src="../assets/img/Logo.png" alt="Logo" />
        </div>

        <div class="clickables">
            <a href="./index.html">HOME</a>
            <a href="./offers.html">ALOJAMENTO</a>
            <a href="#">EXPERIÊNCIAS</a>
            <a href="#">OFERTAS ESPECIAIS</a>
            <a href="#">SOBRE</a>
        </div>

        </nav>
    `;

    return header;
}