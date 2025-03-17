// Função que cria o conteúdo principal da página
export function createOffersPage() {
    const main = document.createElement("main");
    main.classList.add("main-offers");

    main.innerHTML = `
        <section class="intro">
            <h1>Ofertas Imperdíveis</h1>
            <p>Explore os nossos serviços e entre em contato conosco!</p>
        </section>
    `;

    return main;
}
