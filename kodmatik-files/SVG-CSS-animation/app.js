const modalBtn = document.getElementById("modal-ac");
const modal = document.querySelector(".modal");
const modalKapat = document.getElementById("modal-kapat");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modalKapat.addEventListener("click", () => {
  modal.style.display = "none";
});
const change = document.getElementById("codes");

// $( document ).ready(function() {
//     $("#codes").each(function(index, element) {
//         $(this).prepend((++index) + " ");
//         $(this).css({'color':'#0F00FF'});
//     });
//              class adını 36ya kadar yazdım. yapmak istediğim 36 tane class tek tek renk değişsin..
// });