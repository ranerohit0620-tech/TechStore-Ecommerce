let cart = 0;

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        alert("Product Added to Cart!\nTotal Items: " + cart);
    });
});
