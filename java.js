const openModalButton = document.querySelector("#open-modal");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector(".close");
const cancelButton = document.querySelector("#cancel-button");
const confirmButton = document.querySelector("#confirm-button");

openModalButton.addEventListener("click", function() {
	modal.style.display = "block";
});

closeButton.addEventListener("click", function() {
	modal.style.display = "none";
});

cancelButton.addEventListener("click", function() {
	modal.style.display = "none";
});

confirmButton.addEventListener("click", function() { 
	modal.style.display = "none";
});