/*Ajusta las funciones de crear y eliminar un contacto para que 
puedan almacenar la siguiente información como objetos: 
id, nombres, apellidos, teléfono, ubicaciones (ciudad y dirección)*/

let listaContactos = [];

const contacto1 = {
  id: 1,
  nombre: "Pedro",
  apellido: "Díaz",
  telefono: 555555,
  ubicacion: {
    ciudad: "Santa Cruz",
    direccion: "Calle Libertad 235",
  },
};

const contacto2 = {
  id: 2,
  nombre: "Roberto",
  apellido: "Parada",
  telefono: 444444,
  ubicacion: {
    ciudad: "Cochabamba",
    direccion: "Calle Aroma 875",
  },
};

const contacto3 = {
  id: 3,
  nombre: "Javier",
  apellido: "Paz",
  telefono: 333333,
  ubicacion: {
    ciudad: "Zaragoza",
    direccion: "Calle Tenor Fleta",
  },
};

/* Función Crear Contacto */

function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

agregarContacto(contacto1);
agregarContacto(contacto2);
agregarContacto(contacto3);
console.log(listaContactos);

/* Función Eliminar Contacto */

// function eliminarContacto(idContacto) {
//   listaContactos = listaContactos.filter((lista) => lista.id !== idContacto);
// }

// eliminarContacto(2);
// console.log(listaContactos);

/* Función Actualizar Teléfono de un Contacto, indicando el "id" */

// function actualizarTelefono(lista, id, telefono) {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i].id == id) {
//       lista[i].telefono = telefono;
//     }
//   }
// }

// actualizarTelefono(listaContactos, 1, 666);
// console.log(listaContactos);

/* Propiedad order agregado a los contactos */

contacto1.order = 9;
contacto2.order = 6;
contacto3.order = 4;
console.log(listaContactos);

/*Ordeancion por Inserción, segun número teléfono*/

const ordenacionPorInsercion = (listaAordenar) => {
  const l = listaAordenar.length;
  let j, temp1, temp2, temp3, temp4, temp5, temp6;
  for (let i = 1; i < l; i++) {
    j = i;
    temp1 = listaAordenar[i].order;
    temp2 = listaAordenar[i].id;
    temp3 = listaAordenar[i].nombre;
    temp4 = listaAordenar[i].apellido;
    temp5 = listaAordenar[i].telefono;
    temp6 = listaAordenar[i].ubicacion;
    while (j > 0 && listaAordenar[j - 1].order > temp1) {
      listaAordenar[j].order = listaAordenar[j - 1].order;
      listaAordenar[j].id = listaAordenar[j - 1].id;
      listaAordenar[j].nombre = listaAordenar[j - 1].nombre;
      listaAordenar[j].apellido = listaAordenar[j - 1].apellido;
      listaAordenar[j].telefono = listaAordenar[j - 1].telefono;
      listaAordenar[j].ubicacion = listaAordenar[j - 1].ubicacion;
      j--;
    }
    listaAordenar[j].order = temp1;
    listaAordenar[j].id = temp2;
    listaAordenar[j].nombre = temp3;
    listaAordenar[j].apellido = temp4;
    listaAordenar[j].telefono = temp5;
    listaAordenar[j].ubicacion = temp6;
  }

  return listaAordenar;
};

const listaOrdenada = ordenacionPorInsercion(listaContactos);

console.log(listaOrdenada);
