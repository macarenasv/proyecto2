

let form = document.getElementById("form");

let descripciones = document.getElementById("descripciones");
let lista = [];
let parque = document.getElementById("nombreParque");
let fecha = document.getElementById("fecha");
let planes = document.getElementById("planes");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    botonEnviar();
})





let botonEnviar = () =>{
    if(parque.value === ""|| fecha.value === ""||planes.value === ""){
        alert("Los campos no pueden quedar en blanco.")
    }
    else{
        guardarDescripcion()
    }
};



let guardarDescripcion = ()=> {
    const descripcion = {
        parque: parque.value,
        fecha: fecha.value,
        planes: planes.value, 
        id: lista.length?lista[lista.length -1].id+1:1,
    }
    console.log(descripcion);
    lista.push(descripcion);
    //local storage
    form.reset(); 
    crearDescripcion();
};


let crearDescripcion = () => {
    descripciones.innerHTML = ""
    lista.forEach((des)=>{
        descripciones.innerHTML += 
        `
        <div>
        <p>${des.parque}</p>
        <p>${des.fecha}</p>
        <p>${des.planes}</p>
        <span class="opciones">
            <i onClick="editarDescripcion(this)" class="fa-solid fa-pen"></i>
            <i onClick="borrarDescripcion(this,${des.id})" class="fa-solid fa-trash-can"></i>
        </span>
    </div>
        `;
    })
    
    
};

let borrarDescripcion = (e,idDelElementoBorrado)=> {
lista = lista.filter((b)=> b.id!=idDelElementoBorrado)
//local storage
crearDescripcion()
};

let editarDescripcion = (e)=> {
input.value = e.parentElement.previousElementSibling.innerHTML;
e.parentElement.parentElement.remove(this);

};
