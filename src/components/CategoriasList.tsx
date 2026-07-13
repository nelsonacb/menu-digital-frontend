import type { Categoria } from '../interfaces';

interface Props {
  categorias: Categoria[];
  categoriaActiva: string;
  onCategoriaClick: (id: string) => void;
}

export const CategoriasList = ({
  categorias,
  categoriaActiva,
  onCategoriaClick,
}: Props) => {
  return (
    <div>
      <h2 className='text-xl font-bold mb-4 border-b-2 border-[#425340] pb-2'>
        Categorías
      </h2>
      <ul className='space-y-2'>
        {categorias.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onCategoriaClick(cat.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-lg md:text-xl ${
                cat.id === categoriaActiva
                  ? 'bg-[#425340] text-[#DFCEBC] font-semibold'
                  : 'text-[#425340] hover:bg-[#425340] hover:text-[#DFCEBC]'
              }`}
            >
              <b>{cat.nombre}</b>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
