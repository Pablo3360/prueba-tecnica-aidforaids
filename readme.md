# README

Prueba Tecnica para Backend Engineer

## Principales Tecnologias Utilizadas

Node.js, Express, PostgreSQL, Sequelize, Claudinary, jsonwebtoken.

## Prácticas de seguridad que se contemplan en la API

```bash
1 - Se guarda la informacion sensible en varibles de entorno
2 - Se realiza el hashing de las contraseñas de usuarios mediante la libreria bcrypt
3 - Se trabaja con autenticación de usuarios mediante TOKENS, utilizando la libreria jsonwebtoken
4 - 
```

## El proyecto intenta mantener dividido las siguientes Capas - Software Layers

```bash
1 - Application Layer
2 - Business Layer
3 - Data Access Layer
```

## Para ejecutar en ambiente de Desarrollo

```bash
1 - Clonar el Repositorio
2 - ejecutar npm install
3 - Configurar variables de entorno
4 - ejecutar npm start
```
## Variables de entorno

### Su archivo .env debera contener las siguientes variables definidas:

```bash
PORT=3001
URL_ALLOW_ORIGIN=http://localhost:3000

PGUSER=postgres
PGPASSWORD=
PGHOST=localhost
PGPORT=5432
PGDATABASE=aidforaids

SECRETJWT=aidforaids

CLAUDINARY_CLOUD_NAME=aidforaids
CLAUDINARY_API_KEY=
CLAUDINARY_API_SECRET=
```
Deberá suministrar una API_KEY y API_SECRET de Claudinary

## EndPoints SIN Autenticación

### Registro de Usuarios
	- Metodo: POST
	- Endpoint: /users/register
	- En body: name, email, password
	- Responde: id, name, email

### Login Autenticación de Usuarios
	- Metodo: POST
	- Endpoint: /users/login
	- En body: email, password
	- Responde: id, name, email, token

## EndPoints CON Autenticación

### Las siguientes Endpoints necesitan una cabecera de authorization bearer con un TOKEN valido

### Perfil Usuarios
	- Metodo: PUT
	- Endpoint: /users/perfil
	- Se debe enviar los siguientes field names y correspondiente contenido
		field name: image (file, type: jpeg, png)
		field name: direccion (string)
	- Responde: id, name, email, imageUrl, direccion
	- La imagen se guarda en Claudinary.

## Inventario de Productos

### Lista de Libros y existencias
	- Metodo: GET 
	- Endpoint: /book
	- Enviar por query: page y limit
	- Responde: Array donde en cada elemento se especifica id, isnb, title, autor, stock

### Agregar libros
	- Metodo: POST
	- Endpoint: /book/create
	- Enviar por body los siguiente atributos unisbn, title, price, autor, editorial, quantity
	- Responde id, isbn, title, autor, stock

### Actualizar la existencia de un libro
	- Metodo: PUT
	- Endpoint: /book/stock
	- Enviar por params el id del libro
	- Enviar por body quantity
	- Responde id, isnb, title, autor, stock

### agregar distribuidor
	- Metodo: POST
	- Endpoint: /book/distributor
	- Enviar por body name
	- Responde: id, name

### Registro de Compra de libros
	- Metodo: POST
	- Endpoint: /book/compra
	- Enviar por params distributorId
	- En body se debe enviar un Array, donde cada elemento debe especificar: { bookId, quantity }
	- Responde: Array con los registros realizados

### Para atributos futuros
	- Se define el atributo data del tipo DataTypes.JSONB

## Productos

### Agregar book al carrito
	- Metodo: POST
	- Endpoint: /sales/addcart
	- En Body se debe especificar el bookId
	- Responde un Array con todos los books en el carrito del usuario

### Compra de un Book
	- Metodo: POST
	- Endpoint: /sales/buy
	- En body se debe especificar el bookId y quantity
