export function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    footer.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
       
        <div id="footer_lists" list-style: none;>
        
            <ul class="footer-list">
                <li> <h3> Termos e configurações</h3></li>
                <li>Privacidade e Cookies</li>
                <li>Termos e condições</li>
                <li>Informações Legais</li>
                <li>Declaração de direitos humanos</li>
            </ul>   
            
            <ul class="footer-list">
                <li> <h3> Sobre</h3></li>
                <li>Como trabalhamos</li>
                <li>Trabalhe conosco</li>
                <li>Sustentabilidade</li>
                <li>Assessoria de imprensa</li>
            </ul>   

            <ul class="footer-list">
                <li> <h3> Parceiros</h3></li>
                <li>Torne-se um afiliado</li>
                <li>Central de Ajuda ao Parceiro</li>
                <li>Anuncie sua propiedade</li>
            </ul>  

            <ul class="footer-list">
                <li> <h3> Apoio</h3></li>
                <li>Perguntas frequentes</li>
                <li>Contato - Serviço de Apoio ao Cliente</li>
                <li>Central de recursos de segurança</li>
                <li>Administre suas viagens</li>
            </ul>  


        </div>

        <hr width="100%">

        <p id="aRR">&copy; 2025 - Todos os direitos reservados.</p>
        
        <div id="footer_content">
            <a href="#" class="footer-link" id="instagram">
                <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="#" class="footer-link" id="facebook">
                <i class="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" class="footer-link" id="whatsapp">
            <i class="fa-brands fa-whatsapp"></i>
            </a>

        </div>
    
    `;

    return footer;
}