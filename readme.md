# API CRUD con Express y MongoDB - Gestión de Frutas 🍎🍌🍇

## Descripción del Proyecto

Esta API RESTful permite gestionar una colección de frutas utilizando **Express** y **MongoDB** con **Mongoose**. Se implementan operaciones CRUD para crear, leer, actualizar y eliminar frutas en la base de datos.

---

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

---

## Modelo de Datos

El modelo `Frutas` contiene los siguientes campos:

| Campo  | Tipo    | Descripción               |
|--------|---------|---------------------------|
| nombre | String  | Nombre de la fruta         |
| color  | String  | Color de la fruta          |
| dulce  | Boolean | Indica si la fruta es dulce|

---

## Endpoints

### Base URL

```
http://localhost:3008/api/v1/frutas
```

### Obtener todas las frutas

- **Método:** GET  
- **Ruta:** `/`  
- **Descripción:** Retorna todas las frutas en la base de datos.  
- **Respuesta:**

```json
[
  {
    "_id": "615e3bbefcb1f8a3e4eac2a1",
    "nombre": "Manzana",
    "color": "Rojo",
    "dulce": true
  },
  {
    "_id": "615e3bbefcb1f8a3e4eac2a2",
    "nombre": "Limón",
    "color": "Amarillo",
    "dulce": false
  }
]
```

---

### Obtener una fruta por ID

- **Método:** GET  
- **Ruta:** `/:id`  
- **Parámetros:**  
  - `id`: ID de MongoDB de la fruta  
- **Respuesta exitosa:**

```json
{
  "_id": "615e3bbefcb1f8a3e4eac2a1",
  "nombre": "Manzana",
  "color": "Rojo",
  "dulce": true
}
```

- **Errores posibles:**  
  - `404 Not Found` si no existe la fruta con ese ID.

---

### Crear una nueva fruta

- **Método:** POST  
- **Ruta:** `/`  
- **Body (JSON):**

```json
{
  "nombre": "Pera",
  "color": "Verde",
  "dulce": true
}
```

- **Respuesta exitosa:**  
  - Código HTTP: `201 Created`  
  - JSON con mensaje y la fruta creada:

```json
{
  "mensaje": "Fruta creada exitosamente",
  "frutas": {
    "_id": "615e3bbefcb1f8a3e4eac2a3",
    "nombre": "Pera",
    "color": "Verde",
    "dulce": true
  }
}
```

- **Errores posibles:**  
  - `400 Bad Request` si los datos son inválidos o faltan.

---

### Actualizar una fruta por ID

- **Método:** PUT  
- **Ruta:** `/:id`  
- **Body (JSON):**

```json
{
  "nombre": "Pera",
  "color": "Verde Claro",
  "dulce": false
}
```

- **Respuesta exitosa:**

```json
{
  "mensaje": "Fruta actualizada correctamente"
}
```

- **Errores posibles:**  
  - `404 Not Found` si no existe la fruta con ese ID.

---

### Eliminar una fruta por ID

- **Método:** DELETE  
- **Ruta:** `/:id`  
- **Respuesta exitosa:**

```json
{
  "mensaje": "Fruta eliminada correctamente"
}
```

- **Errores posibles:**  
  - `404 Not Found` si no existe la fruta con ese ID.

---

## Configuración e instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear un archivo `.env` en la raíz con la variable:

```
MONGODB_URI=mongodb://localhost:27017/frutasDB
```

4. Ejecutar la aplicación:

```bash
node index.js
```

La API estará disponible en `http://localhost:3008/api/v1/frutas`.

---

## Estructura del Proyecto

```
/controllers
  └── frutasControllers.js
/models
  └── frutasmodels.js
/routes
  └── frutasroutes.js
index.js
.env
README.md
```

