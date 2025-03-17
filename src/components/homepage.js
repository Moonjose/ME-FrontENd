// Função que cria o conteúdo principal da página
export function createHomePage() {
    const main = document.createElement("main");
    main.classList.add("main");

    main.innerHTML = `
        <section class="intro">
            <h1>Bem-vindo à nossa página</h1>
            <p>Explore os nossos serviços e entre em contato conosco!</p>
        </section>

        <section class="imagens">
            <img src="https://source.unsplash.com/600x400/?nature" alt="Natureza">
            <img src="https://source.unsplash.com/600x400/?city" alt="Cidade">
            <img src="https://source.unsplash.com/600x400/?technology" alt="Tecnologia">
        </section>
    `;

    return main;
}
