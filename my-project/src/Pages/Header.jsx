

export default function Header() {
    return (
            <header className=" bg-slate-400 text-black py-4 flex items-center justify-between">
              {/* Logo a la izquierda */}
              <div className="flex items-center ml-5">
                <img src="/path/to/your/logo.png" alt="Logo" className="w-8 h-8 mr-5" />
                <span className="text-lg font-bold">Cal Masses</span>
              </div>
        
              {/* Selector de idioma a la derecha */}
              <div className="flex items-center mr-5">
                <span className="mr-2">Idioma:</span>
                <select
                  className="bg-white rounded-lg py-2 px-3 border border-slate-400"
                  onChange={(e) => console.log('Seleccionado idioma:', e.target.value)}
                >
                  <option value="es">Español</option>
                  <option value="en">Inglés</option>
                  <option value="en">Catalan</option>
                </select>
              </div>
            </header>
    );
};