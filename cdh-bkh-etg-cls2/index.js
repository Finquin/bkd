// ==========================================
//       Cls 02
//       Principios básicos de Javascript
//       Entrega:01 Cls:02
// ==========================================

// creo la clase
class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  // metodo retorna el nombre y apellido del usuario
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  // metodo  recibe un nombre de mascota y lo agrega al array de mascotas.
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  // contamos la cantidad de mascotas
  countMascotas() {
    return this.mascotas.length;
  }

  // agregamos al array el libro y autor
  addBook(nombre, autor) {
    this.libros.push({
      nombre,
      autor,
    });
  }

  // retornamos solo el nombre del array de libros
  getBookNames() {
    return this.libros.map((l) => {
      console.log(`Tengo este libro: ${l.nombre}`);
    });
  }
}

const usuario = new Usuario(
  "Juan",
  "Perez",
  [
    { nombre: "El señor de las moscas", autor: "William Golding" },
    { nombre: "Fundacion", autor: "Isaac Asimov" },
  ],
  ["tiburon"]
);

// ==============================

console.log(`------------------------------`);
console.log("El nombre es:", usuario.getFullName());
console.log(`------------------------------`);

usuario.addMascota("gato");

console.log("La cantidad de mascotas es ", usuario.countMascotas());

usuario.addBook("El Sentimiento Tragico de la Vida", "Unamono");

console.log(`------------------------------`);
usuario.getBookNames();
console.log(`------------------------------`);
