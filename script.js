const search = document.getElementById("search");

search.addEventListener("keyup", function () {
    let value = search.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (card.innerText.toLowerCase().includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
