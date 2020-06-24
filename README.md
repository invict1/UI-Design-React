## URL (ACTUALIZAR)

Web: https://ui-design-react-823qjzp9m.now.sh

Mobile: 

## Principales decisiones de diseño (ACTUALIZAR)

Nos basamos en los estilos limpios y sencillos que encontramos en paginas del estilo como Airbnb, Booking y Qatar Airways pero también en otras paginas que nos resultaron agradables a la vista como mongodb y react, donde no utilizan muchos colores, sino que tienen generalmente 1 color principal y luego juegan con tonos de grises y el color blanco.

También lo que notamos en estas paginas de viajes, es que todas usan imagenes grandes o medianamente grades con poco texto, y toda la información te la brindan al ingresar en cada una de ellas por lo cual seguimos esa idea para el diseño de nuestro proyecto.

Por otro lado, decidimos no utilizar librerias que nos brindaran una Gallery la cual sería utilizada en el home sino que optamos por utilizar Cards y poder ajustarlo a lo que creemos ser una buena solución y fácil de extender si necesario.

(ACTUALIZAR)
Justificaciones sobre funcionalidad 'Crear viaje':

(ACTUALIZAR)
Justificaciones sobre funcionalidad 'Compartir una foto':

(ACTUALIZAR)
Justificaciones sobre funcionalidad 'Listado de lugares por distancia':

(ACTUALIZAR)
Justificaciones sobre funcionalidad Crear viaje:

## Jerarquía de componentes: (ACTUALIZAR)
### Web:

- Header
  - LoginForm
  - RegisterForm
  
- Home
  - Continent 
  - Register
  
- Detail
  - Activities
  - GivenReview
  - AddReview
  
- Footer

### Mobile:

## Instrucciones (ACTUALIZAR)
### Web:
- Clonar el repositorio 
- Correr comando `yarn install`
- Correr comando `yarn start`

### Mobile:
Una URL de acceso público para correr la aplicación nativa de Expo, o bien, una guía detallada de cómo instalar la aplicación nativa en un simulador Android o iOS a partir del repositorio recién clonado.Una URL de acceso público para correr la aplicación nativa de Expo, o bien, una guía detallada de cómo instalar la aplicación nativa en un simulador Android o iOS a partir del repositorio recién clonado.Una URL de acceso público para correr la aplicación nativa de Expo, o bien, una guía detallada de cómo instalar la aplicación nativa en un simulador Android o iOS a partir del repositorio recién clonado.Una URL de acceso público para correr la aplicación nativa de Expo, o bien, una guía detallada de cómo instalar la aplicación nativa en un simulador Android o iOS a partir del repositorio recién clonado.

### Para deployment en Versel

- Modificar web/apollo.js e indicar la nueva URL

## Dependencias (ACTUALIZAR)

### [Material UI](https://material-ui.com/)
- npm install @material-ui/core

### [styled-components](https://styled-components.com/)
- npm install --save styled-components

### [Formik](https://jaredpalmer.com/formik/)
- npm install formik --save

### [Yup](https://www.npmjs.com/package/yup)
- npm install -S yup

### [Mongoose](https://mongoosejs.com)
- npm install mongoose

### [GraphQL](https://graphql.org/)
- npm install --save graphql

## Prototype
[Prototype link](figma.com/file/PFDGyPfof3jsY7bt6dvu2h/Desarrollo-UI?node-id=0%3A1)
 
### MENU GLOBAL: 
- icono a la izquierda
- barra de busqueda
- boton de page register
- boton de page login

### Home
- orden, primero 
- imagen + nombre + cantidad actividades
	
### Login (Modal)

### Register (Modal)

### Local Detail
- nombre + valoracion media
- descripcion
- imagenes
- actividades disponibles
- reseñas de visitantes
	- nombre, estrellas en la reseña
- agregar reseña
	- debe estar logueado

## Schema Graphql (ACTUALIZAR)

```
const { gql } = require("apollo-server-micro");

const typeDefs = gql`
    type Query {
        user(email: String!, password: String!): User
        users: [User]
        
        continents: [Continent]
        regions: [Region]
        region(id: ID!): Region

        place(id: ID!): Place
        places(continentId: ID!): [Place]
        activities(placeId: ID!): [Activity]
        images(placeId: ID!): [Image]
        reviewes(placeId: ID!): [Review]
    }

    type User {
        id: ID
        fullname: String!
        email: String!
        password: String!
    }

    type Continent {
        id: ID
        name: String!
    }
    
    type Region {
        id: ID
        name: String!
    }

    type Place {
        id: ID
        name: String!
        description: String!
        continentId: ID!
        regionId: ID
    }

    type Activity {
        id: ID
        placeId: String!
        name: String!
        price: Int!
    }

    type Image {
        id: ID
        placeId: String!
        url: String!
    }

    type Review {
        id: ID
        userId: ID!
        placeId: ID!
        rating: Int!
        description: String!
    }

    type Mutation {
        register(input: RegisterInput!): User!
        registerContinent(input: RegisterContinent!): Continent!
        registerRegion(input: RegisterRegion!): Region!
        registerPlace(input: RegisterPlace!): Place!
        registerActivity(input: RegisterActivity!): Activity!
        registerImage(input: RegisterImage!): Image!
        registerReview(input: RegisterReview!): Review!
    }

    input RegisterInput {
        fullname: String!
        email: String!
        password: String!
    }

    input RegisterContinent {
        name: String!
    }

    input RegisterRegion {
        name: String!
    }

    input RegisterPlace {
        name: String!
        description: String!
        continentId: ID!
        regionId: ID
    }

    input RegisterActivity {
        name: String!
        price: Int!
        placeId: ID!
    }

    input RegisterImage {
        url: String!
        placeId: ID!
    }

    input RegisterReview {
        userId: ID!
        placeId: ID!
        rating: Int!
        description: String!
    }
`;

module.exports = typeDefs;
```
