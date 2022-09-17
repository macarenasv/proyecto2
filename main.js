

let form = document.getElementById("form");
let agregar = document.getElementById("agregar");
let descripciones = document.getElementById("descripciones");
let lista = [];
let parque = document.getElementById("nombreParque");
let fecha = document.getElementById("fecha");
let planes = document.getElementById("planes");

function guardarEnLS() {
    let arrayAString = JSON.stringify(lista)
    window.localStorage.setItem("tareas", arrayAString)
}

function leerTareas() {
    let tareasEnLS = window.localStorage.getItem("tareas")
    lista = JSON.parse(tareasEnLS) || []
    crearDescripcion()

}

agregar.addEventListener("click", (e) => {
    e.preventDefault();
    botonEnviar();
})

let botonActualizar = document.getElementById("actualizar");

botonActualizar.addEventListener("click", (e) => {
    e.preventDefault();
    actualizar();

})


let botonEnviar = () => {
    if (parque.value === "" || fecha.value === "" || planes.value === "") {
        alert("Los campos no pueden quedar en blanco.")
    }
    else {
        guardarDescripcion()
    }
};



let guardarDescripcion = () => {
    const descripcion = {
        parque: parque.value,
        fecha: fecha.value,
        planes: planes.value,
        id: lista.length ? lista[lista.length - 1].id + 1 : 1,
    }
    console.log(descripcion);
    lista.push(descripcion);
    guardarEnLS()
    form.reset();
    crearDescripcion();
};


let crearDescripcion = () => {
    descripciones.innerHTML = ""
    lista.forEach((des) => {
        descripciones.innerHTML +=
            `
            
            <div class="text-center fs-5 fw-bold">${des.parque}</div>
            <div class="text-center text-muted fs-6">${des.fecha}</div>
            <div class="text-center fs-6">${des.planes}</div>
            <div class=" text-center mb-3 p-4">

              <i onClick="editarDescripcion(this, ${des.id})" class="fa-solid fa-pen noprint"></i>
              <i onClick="borrarDescripcion(${des.id})" class="fa-solid fa-trash-can noprint"></i>

            </div>

          
            
            
        `;
    })


};

let borrarDescripcion = (idDelElementoBorrado) => {
    lista = lista.filter((b) => b.id != idDelElementoBorrado)
    guardarEnLS()
    crearDescripcion()
};

let elementoAEditar

let editarDescripcion = (e, id1) => {
    agregar.style.display = "none"
    botonActualizar.style.display = "block"
    elementoAEditar = lista.find((r) => r.id === id1)

    parque.value = elementoAEditar.parque
    fecha.value = elementoAEditar.fecha
    planes.value = elementoAEditar.planes

};


let actualizar = () => {
    let index = lista.findIndex((a)=> a.id == elementoAEditar.id)

    lista.splice(index, 1, {
        parque: parque.value,
        fecha: fecha.value,
        planes: planes.value,
        id: elementoAEditar.id
    })
    crearDescripcion();
    form.reset();
    agregar.style.display = "block"
    botonActualizar.style.display = "none"
    guardarEnLS();
}

leerTareas(); 