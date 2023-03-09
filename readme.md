# README

## Hola

Hola

- Rutas
	- Registro de Usuarios
		- Post
		- /users/register
		- En body nombre, email, password
		- Responde id, nombre, email
	- Autenticación de Usuarios
		- Post
		- /users/login
		- En body email, password
		- Responde id, nombre, email, token
	- Perfil Usuarios
		- PUT
		- enviar por params id
		- /users/perfil/:userId
		- En body file (jpeg, png), direccion
		- Se guarda en Claudinary. 
			Propuesta de mejora: 
				guardar image con el id del User, 
				reemplazar archivo al actualizar image.
	- Inventario de Productos
		- Lista de Libros y existencias
			- Get 
			- /book
			- enviar por query page y limit
			- Responde Array con objetos donde se indica id, isnb, title, autor, stock
		- Agregar libros
			- Post
			- /book/create
			- body isbn, title, price, autor, editorial, quantity
			- Responde id, isbn, title, autor, stock
		- Actualizar la existencia de un libro
			- PUT
			- /book/stock
			- enviar por params el id del libro
			- body quantity
			- responde id, isnb, title, autor, stock
		- agregar distribuidor
			- POST
			- /book/distributor
			- body name
			- Responde id, name
		- Registro de Compra de libros
			- POST
			- /book/compra
			- params distributorId
			- body array con elementos: { bookId, quantity }
			- Responde array con los records