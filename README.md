# 🏨 Proyecto 4 – API de Reservas de Hotel

API RESTful desarrollada con Node.js y Express para gestionar reservas de hoteles. Incluye funcionalidades para crear, buscar y listar reservas, con documentación Swagger integrada para facilitar su uso y comprensión.

## 🚀 Características

- **CRUD de Reservas**: Permite crear, buscar y listar reservas de hotel.
- **Validación de Datos**: Asegura la integridad de la información proporcionada por los usuarios.
- **Documentación Swagger**: Interfaz interactiva para explorar y probar los endpoints de la API.
- **Estructura Modular**: Código organizado en controladores, rutas y servicios para facilitar el mantenimiento y la escalabilidad.

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
   npm start
   ```

   El servidor estará disponible en `http://localhost:3000`.

## 🧪 Endpoints Principales

### 📄 `GET /reservations/search`

Busca reservas filtradas por parámetros como hotel, fechas, número de huéspedes y tipo de habitación.

**Parámetros de consulta:**

- `hotel`: Nombre del hotel (string)
- `checkIn`: Fecha de entrada (YYYY-MM-DD)
- `checkOut`: Fecha de salida (YYYY-MM-DD)
- `guests`: Número de huéspedes (integer)
- `roomType`: Tipo de habitación (string)

---

### 🆕 `POST /reservations`

Crea una nueva reserva.

**Cuerpo de la solicitud (JSON):**

```json
{
  "hotel": "Hotel California",
  "checkin": "2023-10-01",
  "checkout": "2023-10-05",
  "guests": 2,
  "roomType": "double"
}
```

**Respuesta:**

- `201 Created`: Reserva creada exitosamente.

## 📚 Documentación Swagger

La documentación interactiva de la API está disponible en:

```
http://localhost:3000/api-docs
```

Aquí podrás explorar y probar los diferentes endpoints de la API de manera sencilla.

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js.
- **Swagger (OpenAPI)**: Herramienta para documentar y probar APIs.
- **ESLint & Prettier**: Herramientas para mantener un código limpio y consistente.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
```
