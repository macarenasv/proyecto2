

let form = document.getElementById("form");
let input = document.getElementById("input");
let descripciones = document.getElementById("descripciones");

let parque = document.getElementById("nombreParque");
let fecha = document.getElementById("fecha");
let planes = document.getElementById("planes");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button")
    botonEnviar();
})


 var agrega = getElementById("agregar");

 agrega.addEventListener(click, guardarDescripcion)



let botonEnviar = () =>{
    if(input.value === ""){
        alert("Los campos no pueden quedar en blanco.")
    }
    else{
        console.log("enviado")
        guardarDescripcion()
    }
};



let guardarDescripcion = ()=> {
    const descripcion = {
        parque: parque.value,
        fecha: fecha.value,
        planes: planes.value, 
    }
    console.log(parque.value);

    };
    
    // crearDescripcion();
    


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
