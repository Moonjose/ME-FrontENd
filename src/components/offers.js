// Função que cria o conteúdo principal da página
export function createOffersPage() {
    const main = document.createElement("main");
    main.classList.add("main-offers");

    main.innerHTML = `
        <section class="offers-section">
            <div class="search-div"> 
                <div class="filters-div">
                    <div class="search-input-wrapper">
                        <span class="search-icon">
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon-img">
                                <path d="M24.375 24.249L19.1188 18.9928M21.9583 12.1657C21.9583 17.5045 17.6304 21.8324 12.2917 21.8324C6.95291 21.8324 2.625 17.5045 2.625 12.1657C2.625 6.82695 6.95291 2.49904 12.2917 2.49904C17.6304 2.49904 21.9583 6.82695 21.9583 12.1657Z" stroke="#00FFCC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <input type="text" class="search-input" placeholder="Para onde você vai?" />
                    </div>
                    <div class="check-in-div">
                        <label class="filter-label">CHECK-IN</label>
                        <div class="date-input-wrapper">
                            <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="calendar-icon-img">
                                <path d="M13.4052 1.67345V5.22465M6.19987 1.67345V5.22465M1.69653
                                 8.77585H17.9085M3.49787 3.44905H16.1072C17.1021 3.44905 17.9085 
                                 4.24401 17.9085 5.22465V17.6539C17.9085 18.6345 17.1021 19.4295 
                                 16.1072 19.4295H3.49787C2.50302 19.4295 1.69653 18.6345 1.69653 
                                 17.6539V5.22465C1.69653 4.24401 2.50302 3.44905 3.49787 3.44905Z" 
                                 stroke="#00FFCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <input type="date" class="datepicker">
                        </div>
                    </div>
                    <div class="check-out-div"> 
                        <label class="filter-label">CHECK-OUT</label>
                        <div class="date-input-wrapper">
                            <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="calendar-icon-img">
                                <path d="M13.4052 1.67345V5.22465M6.19987 1.67345V5.22465M1.69653 
                                8.77585H17.9085M3.49787 3.44905H16.1072C17.1021 3.44905 17.9085 
                                4.24401 17.9085 5.22465V17.6539C17.9085 18.6345 17.1021 19.4295 
                                16.1072 19.4295H3.49787C2.50302 19.4295 1.69653 18.6345 1.69653 
                                17.6539V5.22465C1.69653 4.24401 2.50302 3.44905 3.49787 3.44905Z" 
                                stroke="#00FFCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <input type="date" class="datepicker">
                        </div>
                    </div>
                    <div class="adult-div">
                        <label class="filter-label">ADULTOS</label>
                        <div class="number-input-wrapper">
                            <img src="/assets/img/icons/AdultIcon.png" alt="Ícone de adultos" class="number-icon-img" />
                            <input type="number" class="number-input" placeholder="0" min="0" />
                        </div>
                    </div>
                    <div class="child-div"> 
                        <label class="filter-label">CRIANÇAS</label>
                        <div class="number-input-wrapper">
                            <img src="/assets/img/icons/ChildIcon.png" alt="Ícone de adultos" class="number-icon-img" />
                            <input type="number" class="number-input" placeholder="0" min="0" />
                        </div>
                    </div>
                    <div class="room-div"> 
                        <label class="filter-label">QUARTOS</label>
                        <div class="number-input-wrapper">
                            <img src="/assets/img/icons/RoomIcon.png" alt="Ícone de adultos" class="number-icon-img" />
                            <input type="number" class="number-input" placeholder="0" min="0" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-offers-div">
                <h2 class="main-offers-title"> Ofertas Imperdíveis </h2>
                <div class="main-offers-container"> 

                </div> 
            </div> 

            <div class="favorite-offers-div">
                <h2 class="favorite-offers-title"> Favoritos</h2>
                <div class="favorite-offers-container"> 
                    
                </div> 
            </div> 
        </section>
    `;

    loadOffers(main.querySelector(".main-offers-container"), "data/mainOffers.json");
    loadOffers(main.querySelector(".favorite-offers-container"), "data/favoriteOffers.json");
    return main;
}

function loadOffers(container, datalocation) {
    fetch(datalocation)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o arquivo JSON");
            }
            return response.json();
        })
        .then(hotels => {
            hotels.forEach(hotel => {
                const card = document.createElement("div");
                card.classList.add("hotel-card");

                 // Gerar as estrelas dinâmicamente
                 const maxStars = 5;
                 let starsHTML = "";
                 for (let i = 1; i <= maxStars; i++) {
                     if (i <= hotel.rating) {
                        starsHTML += `<svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg class="star-icon">
                        <path d="M6.29532 0L8.24057 4.14392L12.5906 4.81251L9.44297 8.03629L10.1858 12.5906L6.29532 10.4392L2.40481 12.5906L3.14766 8.03629L0 4.81251L4.35006 4.14392L6.29532 0Z" fill="#DCCB10"/>
                        </svg>
                        `;
                     } else {
                        starsHTML += `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg class="star-icon">
                        <path d="M7.29532 1L9.24057 5.14392L13.5906 5.81251L10.443 9.03629L11.1858 13.5906L7.29532 11.4392L3.40481 13.5906L4.14766 9.03629L1 5.81251L5.35006 5.14392L7.29532 1Z" stroke="#DCCB10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        `;
                     }
                 }

                card.innerHTML = `
                    <div class="hotel-image-div"> 
                        <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
                    </div>
                    <div class="hotel-info"> 
                        <h4 class="hotel-name">${hotel.name}</h4>
                        <div class="hotel-rating">${starsHTML}</div>
                        <p class="hotel-price">Por <span class="price-highlight">R$ ${hotel.price}</span> /dia.</p>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar as ofertas:", error);
        });
}

export function configureDatePicker() {
    
    // Bind de evento onClick() para abrir o calendário
    document.querySelectorAll(".calendar-icon-img").forEach(icon => {
        icon.addEventListener("click", () => {
            let input = icon.nextElementSibling;
            if (input && input.type === "date") {
                if (input.showPicker) {
                    input.showPicker(); // Método moderno para abrir o calendário
                } else {
                    input.focus(); // Fallback para navegadores mais antigos
                }
            }
        });
    });

    // Configura min e max baseado na data atual
    const currentYear = new Date().getFullYear();
    const dateInputs = document.querySelectorAll(".datepicker");

    dateInputs.forEach(input => {
        input.min = `${currentYear}-01-01`;
        input.max = `${currentYear + 5}-12-31`;
    });
}

