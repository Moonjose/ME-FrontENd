export function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    header.innerHTML = `
        <nav class="header">

        <div class="logo">
            <img src="../assets/img/Logo.png" alt="Logo" />
        </div>

        <div class="clickables">
            <a href="./index.html">HOME</a>
            <a href="#">SOBRE</a>
            <a href="./offers.html">OFERTAS ESPECIAIS</a>
            <a href="#">CONTATO</a>
        </div>

        </nav>
    `;

    return header;
}