//LLAMADO DE ELEMENTOS
const inputNombre = document.querySelector("#nombre");
const btnIniciar = document.querySelector("#iniciar");



btnIniciar.addEventListener("click", ()=>{
  if (inputNombre.value == "") {
    Toastify({
      text: "Usuario no ingresado",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "right", 
      stopOnFocus: true, 
      style: {
        background: "linear-gradient(to right, #d70e0e, #4e0d0d )",
      },
      onClick: function(){}
    }).showToast();
  } else {
    localStorage.setItem("Usuario", inputNombre.value);
    window.location.href = "../pages/productos.html";
  }
});






