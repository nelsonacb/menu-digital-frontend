import type { Producto } from '../interfaces';

interface Props {
  productos: Producto[];
  titulo: string;
}

export const ProductosGrid = ({ productos, titulo }: Props) => {
  const tieneSubcategorias = productos.some((p) => p.subcategoria);

  const renderItem = (prod: Producto) => (
    <div
      key={prod.id}
      className='bg-transparent rounded-lg p-3 flex justify-between items-center border-b border-[#425340]/20'
    >
      <div>
        <h3 className='font-semibold text-lg'>{prod.nombre}</h3>
        {prod.descripcion && (
          <p className='text-sm opacity-80'>{prod.descripcion}</p>
        )}
      </div>
      <div className='text-right whitespace-nowrap ml-4'>
        <p className='font-bold text-lg'>
          {prod.precio} <span className='text-sm font-normal'>CUP</span>
        </p>
        {/* <p className='font-bold text-lg'>
          {prod.precioUSD} <span className='text-xs font-normal'>USD</span>
        </p> */}
      </div>
    </div>
  );

  if (!tieneSubcategorias) {
    return (
      <div>
        <h2 className='text-xl font-bold mb-4 border-b-2 border-[#425340] pb-2'>
          {titulo}
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {productos.map(renderItem)}
        </div>
        {productos.length === 0 && (
          <p className='text-center text-gray-500 mt-8'>
            No hay productos en esta categoría.
          </p>
        )}
      </div>
    );
  }

  const grupos: Record<string, Producto[]> = {};
  productos.forEach((prod) => {
    const key = prod.subcategoria || 'Otros';
    if (!grupos[key]) grupos[key] = [];
    grupos[key].push(prod);
  });

  return (
    <div>
      <h2 className='text-xl font-bold mb-4 border-b-2 border-[#425340] pb-2'>
        {titulo}
      </h2>
      {Object.entries(grupos).map(([subcat, items]) => (
        <div
          key={subcat}
          className='mb-6'
        >
          <h3 className='text-lg font-semibold text-[#425340] mb-2 border-l-4 border-[#425340] pl-2'>
            {subcat}
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {items.map(renderItem)}
          </div>
        </div>
      ))}
    </div>
  );
};
