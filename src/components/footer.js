export function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    footer.innerHTML = `
        <p>&copy; 2025 - Todos os direitos reservados.</p>
    `;

    return footer;
}