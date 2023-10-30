// console.log(submitButton.click)

// Obtener referencias a los elementos del DOM
const formComponent = document.getElementById("form_component");
const submitButton = document.getElementById("submit_button");
const thanksComponent = document.getElementById("thanks_component");
const button_container = document.querySelector(".button_container"); // botones con los puntajes
const selectedScore = document.querySelector(".selected-score"); // Span del puntaje final en el compoente Thanks

// Desabilito el boton submit hasta que se seleccione un puntaje
submitButton.disabled = true;

// Boton para obtener el puntaje y mostarlo al final, al seleccionar un numero se habilita el boton submit
button_container.addEventListener("click", (event) => {
  let selectNumber = event.target.innerText;

  if (selectNumber > 0 && selectNumber <= 5) {
    selectedScore.innerText = selectNumber;
    submitButton.disabled = false;
  }else{
    submitButton.disabled = true;
  }  
});

//Boton submit para activar el component Thanks
submitButton.addEventListener("click", function () {
  if (selectedScore.innerText > 0 && selectedScore.innerText <= 5) {
    formComponent.style.display = "none";
    thanksComponent.style.display = "flex";
  }
});
