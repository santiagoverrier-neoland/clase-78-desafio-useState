


function Buscador({busqueda, setBusqueda}) {

    

    return (
        <section className="buscador" aria-label="Buscar publicaciones">
        <label htmlFor="filtro">Buscar por nombre</label>
        <div className="campo-busqueda">
            <span aria-hidden="true">⌕</span>
            <input
                id="filtro"
                type="search"
                placeholder="Ejemplo: playa"
                autoComplete="off"

                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
        </div>
        </section>
    );
}

export default Buscador;
