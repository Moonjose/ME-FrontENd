// Função que cria o conteúdo principal da página
export function createHomePage() {
    const main = document.createElement("main");
    main.classList.add("main");

    main.innerHTML = `
        <section class="intro">
        
        <div class="title_homePage">
            <h1>Sua Estadia dos Sonhos <p id="special_h1"> Começa aqui </p></h1>
            <hr width= "83%" color="white">
            <p id="description">Hospedagem com excelência, para momentos que ficam na memória.</p>
        </div>
        

        </section>

        <section class="imagens">
           
        </section>
    `;

    return main;
}
