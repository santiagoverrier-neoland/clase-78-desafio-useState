import { useState } from "react";
import { useEffect } from "react";

const publicaciones = [
  {
    id: 1,
    nombre: "Atardecer en la montaña",
    autor: "Sofía",
    imagen:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    likes: 24,
    liked: false,
  },
  {
    id: 2,
    nombre: "Café de la mañana",
    autor: "Martín",
    imagen:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    likes: 17,
    liked: false,
  },
  {
    id: 3,
    nombre: "Paseo por la ciudad",
    autor: "Valentina",
    imagen:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80",
    likes: 31,
    liked: false,
  },
  {
    id: 4,
    nombre: "Día de playa",
    autor: "Tomás",
    imagen:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    likes: 42,
    liked: false,
  },
  {
    id: 5,
    nombre: "Mi compañero de aventuras",
    autor: "Camila",
    imagen:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
    likes: 29,
    liked: false,
  },
  {
    id: 6,
    nombre: "Bosque encantado",
    autor: "Julián",
    imagen:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    likes: 36,
    liked: false,
  },
];

function Galeria({ busqueda }) {
  const [publisFiltradas, setPublisFiltradas] = useState(publicaciones);

  function meGusta(id) {
    console.log(id); // recibo el ID de la publicación
    
	 const publicacion = publisFiltradas.find((publi) => publi.id == id);
    
	 // 
	 if (publicacion.liked) {

      // Si la publicación buscada tiene TRUE
      const actualizadas = publisFiltradas.map(function (item) {
        return item.id === id
          ? { ...item, likes: item.likes - 1, liked: false }
          : item;
      });
      setPublisFiltradas(actualizadas);

    } else {

      // Va a crear un NUEVO array fijándose en cada publicación, y sólo modificará la que coincida con el ID
      const actualizadas = publisFiltradas.map(function (item) {
        return item.id === id
          ? { ...item, likes: item.likes + 1, liked: true }
          : item;
      });

      setPublisFiltradas(actualizadas);
    }
  }

  // Cuando cambie el estado búsqueda quiero que se ejecuten unas instrucciones
  useEffect(
    function () {
      // Chequea, si está vacio el estado "búsqueda" es porque el usuario aún no buscó nada, y por consecuencia, se mostrarán todas las publicaciones de forma predeterminada.
      if (busqueda == "") {
        setPublisFiltradas(publicaciones);
      } else {
        // Si hay algo, es porque el usuario comenzó a escribir y está buscando
        setPublisFiltradas(
          publicaciones.filter(function (publi) {
            // Busca en el objeto de las publicaciones, si la propiedad 'nombre' en minúsculas, incluye al texto que almacena el estado 'búsqueda' en minúsculas.
            return publi.nombre.toLowerCase().includes(busqueda.toLowerCase());
          }),
        );
      }
    },
    [busqueda],
  );

  return (
    <section className="galeria" aria-label="Publicaciones">
      {publisFiltradas.map((publicacion) => (
        <article className="tarjeta" key={publicacion.id}>
          <img src={publicacion.imagen} alt={publicacion.nombre} />
          <div className="contenido">
            <div>
              <h2>{publicacion.nombre}</h2>
              <p>por {publicacion.autor}</p>
            </div>
            <button
              className="like"
              type="button"
              aria-label={`Dar like a ${publicacion.nombre}`}
              onClick={() => meGusta(publicacion.id)}
            >
              <span aria-hidden="true">{publicacion.liked ? "♥" : "♡"}</span>
              {publicacion.likes}
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Galeria;
