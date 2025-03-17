export function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    header.innerHTML = `
        <nav>
            <a href="./index.html">Home</a>
            <a href="#">Sobre</a>
            <a href="./offers.html">Ofertas</a>
            <a href="#">Contato</a>
        </nav>
    `;

    return header;
}