// Função que cria o conteúdo principal da página
export function createOffersPage() {
    const main = document.createElement("main");
    main.classList.add("main-offers");

    main.innerHTML = `
        <section class="offers-section">
            <div class="search-div"> 
                <div class="filters-div">
                    <div class="search-input-wrapper">
                        <span class="search-icon">🔍</span>
                        <input type="text" class="search-input" placeholder="Para onde você vai?" />
                    </div>
                    <div class="check-in-div">
                        <label class="filter-label">CHECK-IN</label>
                        <div class="date-input-wrapper">
                            <input type="date" class="date-input" />
                        </div>
                    </div>
                    <div class="check-out-div"> 
                        <label class="filter-label">CHECK-OUT</label>
                        <div class="date-input-wrapper">
                            <input type="date" class="date-input" />
                        </div>
                    </div>
                    <div class="adult-div">
                        <label class="filter-label">ADULTOS</label>
                        <div class="number-input-wrapper">
                            <span class="number-icon">#</span>
                            <input type="number" class="number-input" placeholder="0" min="0" />
                        </div>
                    </div>
                    <div class="child-div"> 
                        <label class="filter-label">CRIANÇAS</label>
                        <div class="number-input-wrapper">
                            <span class="number-icon">#</span>
                            <input type="number" class="number-input" placeholder="0" min="0" />
                        </div>
                    </div>
                    <div class="room-div"> 
                        <label class="filter-label">QUARTOS</label>
                        <div class="number-input-wrapper">
                            <span class="number-icon">#</span>
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

                card.innerHTML = `
                    <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
                    <h3 class="hotel-name">${hotel.name}</h3>
                    <p class="hotel-rating">${hotel.rating}.0 ${"⭐".repeat(hotel.rating)}</p>
                    <p class="hotel-price">Por R$ ${hotel.price} ao dia.</p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar as ofertas:", error);
        });
}