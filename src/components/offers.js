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
                            <img src="/assets/img/icons/SearchIcon.png" alt="Ícone de busca" class="search-icon-img" />
                        </span>
                        <input type="text" class="search-input" placeholder="Para onde você vai?" />
                    </div>
                    <div class="check-in-div">
                        <label class="filter-label">CHECK-IN</label>
                        <div class="date-input-wrapper">
                            <img src="/assets/img/icons/CalendarIcon.png" alt="Ícone de calendário" class="calendar-icon-img" />
                            <input type="date" class="datepicker">
                        </div>
                    </div>
                    <div class="check-out-div"> 
                        <label class="filter-label">CHECK-OUT</label>
                        <div class="date-input-wrapper">
                            <img src="/assets/img/icons/CalendarIcon.png" alt="Ícone de calendário" class="calendar-icon-img" />
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

    loadOffers(main.querySelector(".main-offers-container"));
    loadOffers(main.querySelector(".favorite-offers-container"));
    return main;
}

function loadOffers(container) {
    fetch("data/hotels.json")
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
                         starsHTML += `<img src="/assets/img/icons/FullStar.png" alt="Estrela cheia" class="star-icon" />`;
                     } else {
                         starsHTML += `<img src="/assets/img/icons/EmptyStar.png" alt="Estrela vazia" class="star-icon" />`;
                     }
                 }

                card.innerHTML = `
                    <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
                    <div class="hotel-info"> 
                        <h4 class="hotel-name">${hotel.name}</h4>
                        <div class="hotel-rating">${starsHTML}</div>
                        <p class="hotel-price">Por <span class="price-highlight">R$ ${hotel.price}</span> ao dia.</p>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar as ofertas:", error);
        });
}