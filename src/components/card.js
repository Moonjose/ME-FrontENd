export function createCard() {
    const header = document.createElement("div");
    header.classList.add("card-div");

    header.innerHTML = `
        <div class="card-image-div"> 
        
        </div>
        <div class="card-info-div"> 

        </div>
    `;

    return header;
}