# 🏨 Proyecto 4 – API de Reservas de Hotel 

API RESTful desarrollada con Node.js y Express para gestionar reservas de hoteles. Incluye funcionalidades para crear, actualizar, buscar, listar y eliminar reservas, con documentación Swagger integrada para facilitar su uso y comprensión.

## 🚀 Características

- **CRUD de Reservas**: Permite crear, actualizar, listar, buscar y eliminar reservas de hotel.
- **Documentación Swagger**: Interfaz interactiva para explorar y probar los endpoints de la API.
- **Estructura Modular**: Código organizado en controladores, rutas y servicios para facilitar el mantenimiento y la escalabilidad.
- **Despliegue en Render** : https://proyecto4-d4d0.onrender.com/api-docs/

## 🧱 Estructura del Proyecto

```
Proyecto4/
├── controllers/        # Lógica de negocio de la API
├── routes/             # Definición de las rutas y endpoints
├── service/            # Servicios auxiliares y lógica compartida
├── data/               # Datos de ejemplo o persistencia temporal
├── server.js           # Punto de entrada de la aplicación
├── package.json        # Dependencias y scripts del proyecto
├── .eslintrc.json      # Configuración de ESLint
├── .prettierrc         # Configuración de Prettier
└── README.md           # Documentación del proyecto
```

## 📦 Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/gissortiz/Proyecto4.git
   cd Proyecto4
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Inicia el servidor:**

   ```bash
   npm run dev
   ```

   El servidor estará disponible en `http://localhost:3000`.

## 🧪 Endpoints Principales

### 🔍 `GET /reservations/search`

Busca reservas filtradas por parámetros como nombre del hotel, fechas, número de huéspedes y tipo de habitación.

**Parámetros de consulta:**

- `hotel`: Nombre del hotel (string)
- `checkin`: Fecha de entrada (YYYY-MM-DD)
- `checkout`: Fecha de salida (YYYY-MM-DD)
- `guests`: Número de huéspedes (integer)
- `roomType`: Tipo de habitación (string)

---

### 📥 `POST /reservations`

Crea una nueva reserva.

**Cuerpo de la solicitud (JSON):**

```json
{
  "id": 1,
  "name": "Juan Perez",
  "phone": "123456789",
  "email": "juan@gmail.com",
  "date": "2023-10-01",
  "checkin": "2023-10-01",
  "checkout": "2023-10-05",
  "adults": 2,
  "children": 0,
  "numberGuests": 2,
  "roomType": "double",
  "status": "confirmed",
  "roomNumber": 101,
  "hotel": "Marriott"
}
```

**Respuesta:**

- `201 Created`: Reserva creada exitosamente.

---

### 📄 `GET /reservations`

Obtiene todas las reservas almacenadas.

**Respuesta:**

- `200 OK`: Lista completa de reservas.

---

### 🔍 `GET /reservations/:id`

Busca una reserva por su ID.

**Parámetro de ruta:**

- `id`: Identificador único de la reserva.

**Respuesta:**

- `200 OK`: Reserva encontrada.
- `404 Not Found`: Reserva no encontrada.

---

### 📝 `PUT /reservations/:id`

Actualiza los datos de una reserva específica.

**Cuerpo de la solicitud (JSON):**

Los mismos campos que en el `POST`.

**Respuesta:**

- `201 Updated`: Reserva actualizada exitosamente.
- `404 Not Found`: Reserva no encontrada.

---

### ❌ `DELETE /reservations/:id`

Elimina una reserva por su ID.

**Respuesta:**

- `200 OK`: Reserva eliminada exitosamente.
- `404 Not Found`: Reserva no encontrada.

## 📚 Documentación Swagger

La documentación interactiva está disponible en:

```
http://localhost:3000/api-docs
```

También puedes acceder desde Render si tienes la app desplegada.

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución JavaScript.
- **Express**: Framework para desarrollo backend.
- **Swagger (OpenAPI)**: Documentación y pruebas de la API.
- **ESLint & Prettier**: Estilo y formato de código.
