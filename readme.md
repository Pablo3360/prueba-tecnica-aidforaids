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
		- /users/perfil/:userId
		- En body file, direccion
		- Se guarda en Claudinary. 
			Propuesta de mejora: 
				guardar image con el id del User, 
				reemplazar archivo al actualizar image.
		