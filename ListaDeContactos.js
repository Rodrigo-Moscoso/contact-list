/*Ajusta las funciones de crear y eliminar un contacto para que 
puedan almacenar la siguiente información como objetos: 
id, nombres, apellidos, teléfono, ubicaciones (ciudad y dirección)*/

let listaContactos = [];

const contacto1 = {
  id: 1,
  nombre: "Pedro",
  apellido: "Díaz",
  telefono: 5555666,
  ubicación: {
    ciudad: "Santa Cruz",
    direccion: "Calle Libertad 235",
  },
};

const contacto2 = {
  id: 2,
  nombre: "Roberto",
  apellido: "Parada",
  telefono: 444888,
  ubicación: {
    ciudad: "Cochabamba",
    direccion: "Calle Aroma 875",
  },
};

/* Función Crear Contacto */
function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

agregarContacto(contacto1);
agregarContacto(contacto2);
console.log(listaContactos);

/* Función Eliminar Contacto */
function eliminarContacto(idContacto) {
  listaContactos = listaContactos.filter((lista) => lista.id !== idContacto);
}

eliminarContacto(2);
console.log(listaContactos);
