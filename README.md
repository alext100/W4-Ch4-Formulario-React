Componentes basicos:

1. Campo
2. Button
3. Checkbox

Paso 1: Personal data. · Name · Last name · Birthdate (cuando el usuario introduzca la fecha, al lado de este campo debe aparecer su edad en años) · Email
Paso 2: Access data. · Username · Password · Repeat password
Paso 3: Login. · Username · Password · Remember password (checkbox)

Componentes:

1:

- 4 campos
- button submit
  Botón para continuar está deshabilitado cuando no hay info en algun campo.
  Con submit se crea un objeto con user info, se carga otro formulario.

2:

- 3 campos
- 2 buttons
  Botón para continuar está deshabilitado cuando no hay info en algun campo.
  Password, Repeat password - se comprueba que info en los campos es igual.
  En el caso de que si el bóton submit se activa.
  Con submit al objeto user info se añade 2 propiedades más, se carga siguiente formulario.

3:

- 2 campos
- button "Acceder"
- button Anterior
  Se comprueba si informacion introducida es igual que tenemos en objeto user info
  - Si => se mustra una pantalla con todos los datos introducidos en el formulario.
  - No => aparece un aviso
