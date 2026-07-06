# Desafío React: likes y filtro de publicaciones

## Punto de partida

La app muestra una galería de publicaciones con una imagen, un nombre, un autor y una cantidad inicial de likes. También incluye un campo de búsqueda y un botón con forma de corazón.

Por ahora, el corazón y el buscador **no funcionan**. Tu objetivo es agregarles interactividad utilizando React.

## Consigna

Modificá la aplicación para cumplir estos dos objetivos:

### 1. Likes interactivos

- Al hacer clic en el corazón de una publicación, su número de likes debe aumentar en uno.
- Solo debe cambiar la publicación seleccionada.
- El nuevo número debe verse inmediatamente en pantalla.
- Desafío extra: cambiá el corazón de `♡` a `♥` después de dar like y evitá que una misma publicación reciba más de un like.

### 2. Filtro por nombre

- Mientras el usuario escribe en el buscador, deben mostrarse únicamente las publicaciones cuyo nombre coincida con el texto ingresado.
- La búsqueda no debe distinguir entre mayúsculas y minúsculas. Por ejemplo, `PlAyA` debe encontrar "Día de playa".
- Si el campo queda vacío, deben volver a mostrarse todas las publicaciones.
- Mostrá un mensaje cuando no haya coincidencias.

## Condiciones

- Usá el hook `useState`.
- No manipules el DOM directamente con `document.querySelector`, `getElementById` ni métodos similares.
- Conservá los datos de las publicaciones y el renderizado con `.map()`.
- La app debe seguir funcionando correctamente en pantallas chicas.

## Tips

1. Importá `useState` desde React al comienzo de `App.jsx`.
2. Pensá qué información puede cambiar mientras se usa la app. Cada dato cambiante probablemente necesite estado.
3. Para actualizar una publicación sin modificar el array original, podés crear un array nuevo usando `.map()`.
4. El evento `onClick` permite ejecutar una función al presionar el corazón.
5. El evento `onChange` del input permite guardar lo que escribe el usuario. Revisá `event.target.value`.
6. Para buscar coincidencias pueden servir `.filter()`, `.includes()` y `.toLowerCase()`.
7. Primero calculá la lista filtrada y luego usá esa lista en el `.map()` del JSX.

## Preguntas para pensar

- ¿Por qué aumentar directamente `publicacion.likes` no es una buena solución en React?
- ¿Qué diferencia hay entre una variable común y una variable de estado?
- ¿Por qué React vuelve a mostrar el componente cuando actualizamos el estado?

## Cómo ejecutar el proyecto

```bash
pnpm install
pnpm dev
```

Abrí la dirección que indique la terminal. Para comprobar la versión final también podés ejecutar:

```bash
pnpm build
```
