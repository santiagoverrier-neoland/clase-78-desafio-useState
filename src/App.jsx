import './App.css'

const publicaciones = [
  {
    id: 1,
    nombre: 'Atardecer en la montaña',
    autor: 'Sofía',
    imagen:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    likes: 24,
  },
  {
    id: 2,
    nombre: 'Café de la mañana',
    autor: 'Martín',
    imagen:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    likes: 17,
  },
  {
    id: 3,
    nombre: 'Paseo por la ciudad',
    autor: 'Valentina',
    imagen:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80',
    likes: 31,
  },
  {
    id: 4,
    nombre: 'Día de playa',
    autor: 'Tomás',
    imagen:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    likes: 42,
  },
  {
    id: 5,
    nombre: 'Mi compañero de aventuras',
    autor: 'Camila',
    imagen:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80',
    likes: 29,
  },
  {
    id: 6,
    nombre: 'Bosque encantado',
    autor: 'Julián',
    imagen:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
    likes: 36,
  },
]

function App() {
  return (
    <main className="app">
      <header className="encabezado">
        <span className="logo">♥</span>
        <div>
          <h1>Momentos</h1>
          <p>Una pequeña galería de grandes recuerdos</p>
        </div>
      </header>

      <section className="buscador" aria-label="Buscar publicaciones">
        <label htmlFor="filtro">Buscar por nombre</label>
        <div className="campo-busqueda">
          <span aria-hidden="true">⌕</span>
          <input
            id="filtro"
            type="search"
            placeholder="Ejemplo: playa"
            autoComplete="off"
          />
        </div>
      </section>

      <section className="galeria" aria-label="Publicaciones">
        {publicaciones.map((publicacion) => (
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
              >
                <span aria-hidden="true">♡</span>
                {publicacion.likes}
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
