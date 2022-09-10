

let form = document.getElementById("form");
let input = document.getElementById("input");
let descripciones = document.getElementById("descripciones");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button")
    botonEnviar();
})

let botonEnviar = () =>{
    if(input.value === ""){
        alert("Los campos no pueden quedar en blanco.")
    }
    else{
        console.log("enviado")
        guardarDescripcion()
    }
};

let descripcion = {};

let guardarDescripcion = ()=> {
    descripcion["texto"] = input.value;
    console.log(descripcion);
    crearDescripcion();
    
};

let crearDescripcion = () => {
    descripciones.innerHTML += 
    `
    <div>
    <p>${descripcion.texto}</p>
    <span class="opciones">
        <i onClick ="editarDescripcion(this)" class="fa-solid fa-pen"></i>
        <i onClick ="borrarDescripcion(this)" class="fa-solid fa-trash-can"></i>
    </span>
</div>
    `;
    input.value = "";
};


let borrarDescripcion = (e)=> {
e.parentElement.parentElement.remove();
};

let editarDescripcion = (e)=> {
input.value = e.parentElement.previousElementSibling.innerHTML;
e.parentElement.parentElement.remove(this);

};
