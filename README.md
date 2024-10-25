# D-Leña

## [Mira la APP!](https://d-lena.netlify.app/)

## Descripción

D-Leña es un proyecto inicial de una pizzeria con el objetivo de vender productos de forma online.

#### [Client Repo here](https://github.com/0mararal0/Project-D-Lena-client)

#### [Server Repo here](https://github.com/0mararal0/Project-D-Lena-server)

## Tecnologías y Librerias usadas

##### HTML

##### CSS

##### JAVASCRIPT

##### REACT

##### REACT-DOM

##### REACT-ROUTER-DOM

##### REACT-SPINNER

##### AXIOS

##### MATERIAL UI

##### LEAFLET

##### RECHARTS

##### SLICK

##### UUID

## Funcionalidades pendientes

###### Pasarela de pago.

###### Registro con Google.

###### Verificación por e-mail.

# Estructura del Client

## Navegación de Usuario

- **404** - El usuario puede ver una página 404 cuando navega a una página que no exite.
- **500** - El usuario puede ver una página 500 cuando ha habido un error en la App.
- **homepage** - El usuario puede acceder a la página HOME para ver de forma general la App e interactuar con ella.
- **Haz tu pedido** - El usuario puede comenzar el pedido.
- **Sobre Nosotros** - El usuario puede ver informacion sobre la empresa.
- **Contacto** - El usuario puede contactar con el administrador.
- **Pizza, Pasta, Ensalada, Postre y Bebida** - El usuario puede comenzar el pedido en esas secciones y añadir productos.
- **SignUp** - El usuario se puede registrar en la app.
- **Login** - El usuario puede acceder a la app.
- **Perfil** - El usuario puede editar su perfil
- **Historial** - El usuario puede ver su historial de reservas.
- **Pedido** - El usuario puede acceder a la vista final del pedido
- **LogOut** - El usuario se puede deslogear.
- **Panel Admin** - El administrador tiene acceso a secciones de productos donde puede crear, ver, filtrar y eliminar cada uno, acceso a usuarios, donde puede bloquear y hacer administrador a un usuario, y acceso a estadisticas donde ve dos graficas sobre los usuarios y sobre los pedidos.

## Client Routes

## React Router Routes (React App)

| Path                | Page        | Components                   | Permissions                       | Behavior                                                           |
| ------------------- | ----------- | ---------------------------- | --------------------------------- | ------------------------------------------------------------------ |
| `/`                 | Home        | Carrusel, Map                | public                            | Home page                                                          |
| `/signup`           | Signup      |                              | public                            | Formulario de registro                                             |
| `/login`            | Login       |                              | public                            | Formulario de acceso                                               |
| `/about`            | About       |                              | public                            | Información sobre la empresa                                       |
| `/contact`          | Contact     | AddGame, GameCard            | public                            | Vista de contacto                                                  |
| `/order`            | Order       |                              | public                            | Vista para selecionar catecorías                                   |
| `/legal`            | Legal       |                              | public                            | Información legal sobre la App                                     |
| `/product/pizza`    | Pizza       | ButtonComponent, ProductCard | public                            | Productos de esta seccion                                          |
| `/product/paste`    | Paste       | ButtonComponent, ProductCard | public                            | Productos de esta seccion                                          |
| `/product/salad`    | Salad       | ButtonComponent, ProductCard | public                            | Productos de esta seccion                                          |
| `/product/dessert`  | Dessert     | ButtonComponent, ProductCard | public                            | Productos de esta seccion                                          |
| `/product/drink`    | Drink       | ButtonComponent, ProductCard | public                            | Productos de esta seccion                                          |
| `/user/profile`     | Profile     |                              | user and admin only `<IsPrivate>` | Formulario para editar usuario                                     |
| `/user/history`     | History     |                              | user and admin only `<IsPrivate>` | Vista resumen de los pedidos del usuario                           |
| `/user/sumary`      | Sumary      | ButtonComponent              | user and admin only `<IsPrivate>` | Vista resumen del pedido del usuario                               |
| `/admin/home`       | HomeAdmin   |                              | admin only `<IsPrivate>`          | Vista del panel de administrador                                   |
| `/admin/product`    | Product     |                              | admin only `<IsPrivate>`          | Vista para ver crear y eliminar productos                          |
| `/admin/statistics` | Statistic   | StatisticComponent           | admin only `<IsPrivate>`          | Vista de estadisticas de la informacion de los usuarios            |
| `/admin/user`       | User        |                              | admin only `<IsPrivate>`          | Vista de usuarios donde se pueden bloquear y hacer administradores |
| `/error`            | ServerError |                              | public                            | vista de error del servidor                                        |
| `*`                 | NotFound    |                              | public                            | vista ruta no encontrada                                           |

## Other Components

- Navbar
- Footer

## Services

- Auth Service

  - auth.login(user/ admin)
  - auth.signup(user/ admin)
  - auth.verify()

- External API
  - Leaflet
  - Cloudinary
  - Charts

## Context

- auth.context
- addProduct.Context

## Links

### Created by

[Developer Alberto Marcos](https://github.com/0mararal0)

### Project

[Repository Link Client](https://github.com/0mararal0/Project-D-Lena-client)

[Repository Link Server](https://github.com/0mararal0/Project-D-Lena-server)

[Deploy Link](https://d-lena.netlify.app/)

### Slides

[Slides Link](https://excalidraw.com/#json=gchSEeamaCNBwVWcxzBFA,WpoS0CCEKq0uQS5S7ouftg)
