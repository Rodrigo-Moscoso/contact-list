/* Lista de Contactos -1 */

let listaContactos = ["Luis Perez", "Andrés Antelo", "Juan Suarez"];

/* Función para Agregar un Contacto */
function agregarContacto(contactoNuevo) {
  listaContactos.push(contactoNuevo);
}
agregarContacto("Pepito");
console.log(listaContactos);

/* Función para Borrar el último Conctacto */
function borrarContacto() {
  listaContactos.pop();
}
borrarContacto();
console.log(listaContactos);

/* Función para Mostrar la lista numerada de Contactos */
function mostrarContactos() {
  for (let i = 0; i < listaContactos.length; i++)
    console.log(i + 1 + ") " + listaContactos[i]);
}
mostrarContactos();
