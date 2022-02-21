const container = document.getElementById("container");

// Event listener to handle creating a new item card;
const createItemButton = document.getElementById("new-item");
createItemButton.addEventListener("click", (e) => {
    const newItemForm = document.getElementById("creation-container");
    newItemForm.style.display = "flex";
});


// Add a card on button press
const newCard = document.getElementById("submit-item");
newCard.addEventListener("click", (e) => {
    const cardTitle = document.getElementById("card-title-input").value;
    const cardDescription = document.getElementById("card-description-input").value;
    addCard(cardTitle, cardDescription);
});


// Create a new card
const addCard = (title, description) => {
    const newCard = document.createElement("button");
    newCard.className = "content-card";
    container.appendChild(newCard);
    const cardContentContainer = document.createElement("div");
    cardContentContainer.className = "card-content-container";
    newCard.appendChild(cardContentContainer);
    const cardTitleContainer = document.createElement("div");
    cardTitleContainer.className = "card-title-container";
    cardContentContainer.appendChild(cardTitleContainer)
    const cardTitle = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.textContent = title;
    cardTitleContainer.appendChild(cardTitle);
    const cardDescriptionContainer = document.createElement("div");
    cardDescriptionContainer.className = "card-description-container";
    cardContentContainer.appendChild(cardDescriptionContainer);
    const cardDescription = document.createElement("p");
    cardDescription.classList = "card-description";
    cardDescription.textContent = description;
    cardDescriptionContainer.appendChild(cardDescription);
    const cardDateContainer = document.createElement("div");
    cardDateContainer.className = "card-date-container";
    cardContentContainer.appendChild(cardDateContainer);
    const cardDate = document.createElement("p");
    cardDate.className = "card-date";
    cardDate.textContent = new Date().toLocaleDateString();
    cardDateContainer.appendChild(cardDate);
    console.log("DONE");
};


// Handle all deletions based on what is pressed
const deleteButton = document.getElementById("delete-item");
deleteButton.addEventListener("click", (e) => {
    container.addEventListener("click", (e) => {
        console.log(e.target.className);
        const parent = e.target.parentNode;
        const grandParent = parent.parentNode;
        const gGrandParent = grandParent.parentNode;
        const dead = gGrandParent.parentNode;
        if (e.target.className == "card-content-container" || 
        e.target.className == "card-title-container" || 
        e.target.className == "card-description-container" || 
        e.target.className == "card-date-container") {
            grandParent.removeChild(parent);
        } else if (e.target.className == "card-title" || 
        e.target.className == "card-description" || 
        e.target.className == "card-date") {
            dead.removeChild(gGrandParent);
        }
    })
})