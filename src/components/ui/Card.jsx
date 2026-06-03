export default function Card() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <h3 className="text-2xl font-bold text-center text-slate-900 mb-10">
        Todo lo que necesitas
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        <article className="rounded-xl bg-white shadow-sm border border-slate-200 overflow-hidden">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/058/144/254/small/beautiful-flowers-wallpaper-image-of-flowers-free-photo.jpg"
            alt=""
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
              <span className="text-indigo-600 text-lg font-bold">1</span>
            </div>

            <h4 className="text-lg font-semibold text-slate-900">
              Perfil único
            </h4>

            <p className="mt-2 text-sm text-slate-500">
              Muestra tu experiencia, proyectos y lo que te apasiona en un solo lugar.
            </p>
          </div>
        </article>

        {/* Card 2 */}

        <article className="rounded-xl bg-white shadow-sm border border-slate-200 overflow-hidden">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/058/144/254/small/beautiful-flowers-wallpaper-image-of-flowers-free-photo.jpg"
            alt=""
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
              <span className="text-indigo-600 text-lg font-bold">2</span>
            </div>

            <h4 className="text-lg font-semibold text-slate-900">
              Conexiones directas
            </h4>

            <p className="mt-2 text-sm text-slate-500">
              Conecta con profesionales de tu rubro sin intermediarios ni algoritmos.
            </p>
          </div>
        </article>

        {/* Card 3 */}

        <article className="rounded-xl bg-white shadow-sm border border-slate-200 overflow-hidden">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/058/144/254/small/beautiful-flowers-wallpaper-image-of-flowers-free-photo.jpg"
            alt=""
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
              <span className="text-indigo-600 text-lg font-bold">3</span>
            </div>

            <h4 className="text-lg font-semibold text-slate-900">
              Proyectos colaborativos
            </h4>

            <p className="mt-2 text-sm text-slate-500">
              Encuentra el equipo perfecto para tu próximo proyecto.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}