# 👨‍🏫 Cls 04 - Manejo de Archivos en Javascript

**Entrega 2- Cdh - Bkd**

---

## 📑 Consigna:

Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

✅ - **save(Object)**: Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.

✅ - **getById(Number)**: Object - Recibe un id y devuelve el objeto con ese id, o null si no está.

✅ - **getAll()**: Object[] Devuelve un array con los objetos presentes en el archivo.

✅ - **deleteById(Number)**: void - Elimina del archivo el objeto con el id buscado.

✅ - **deleteAll()**: void - Elimina todos los objetos presentes en el archivo.

## ✍ Aspectos a incluir en el entregable:

✅ - El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.

✅ - Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.

✅ - Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.

✅ - Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”

✅ - Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído.

✅ - El formato de cada producto será :

```json
{
    title: (nombre del producto),
    price: (precio),
    thumbnail: (url de la foto del producto)
}
```

## 👀 Ejemplo:

Contenido de **"productos.txt"** con 3 productos almacenados

```json
[
  {
    "title": "Escuadra",
    "price": 123.45,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    "id": 1
  },
  {
    "title": "Calculadora",
    "price": 234.56,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    "id": 2
  },
  {
    "title": "Globo Terráqueo",
    "price": 345.67,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    "id": 3
  }
]
```
