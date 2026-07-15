import type { Producto } from '../interfaces';

interface Props {
  productos: Producto[];
  titulo: string;
}

export const ProductList = ({ productos, titulo }: Props) => {
  const tieneSubcategorias = productos.some((p) => p.subcategoria);

  const renderItem = (prod: Producto) => (
    <div
      key={prod.id}
      className='flex justify-between items-start py-3 border-b border-primary/10 last:border-0'
    >
      <div className='pr-4'>
        <h4 className='font-semibold text-lg text-primary'>{prod.nombre}</h4>
        {prod.descripcion && (
          <p className='text-sm text-primary/70 mt-0.5'>{prod.descripcion}</p>
        )}
      </div>
      <div className='text-right whitespace-nowrap ml-4'>
        <p className='font-bold text-primary'>
          {prod.precio} <span className='text-sm font-normal'>CUP</span>
        </p>
        {/* <p className='font-bold text-primary'>
          {prod.precioUSD} <span className='text-[10px] font-normal'>USD</span>
        </p> */}
      </div>
    </div>
  );

  if (!tieneSubcategorias) {
    return (
      <div>
        <h2 className='text-3xl md:text-4xl font-serif font-bold text-primary mb-6 border-b-2 border-primary/20 pb-3'>
          {titulo}
        </h2>
        <div className='bg-white rounded-2xl shadow-md p-4 md:p-6 divide-y divide-primary/10'>
          {productos.map(renderItem)}
        </div>
        {productos.length === 0 && (
          <p className='text-center text-primary/50 mt-8'>
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
      <h2 className='text-3xl md:text-4xl font-serif font-bold text-primary mb-6 border-b-2 border-primary/20 pb-3'>
        {titulo}
      </h2>
      {Object.entries(grupos).map(([subcat, items]) => (
        <div
          key={subcat}
          className='mb-6'
        >
          <h3 className='text-xl font-serif font-semibold text-primary/80 mb-3 border-l-4 border-primary pl-3'>
            {subcat}
          </h3>
          <div className='bg-white rounded-2xl shadow-md p-4 md:p-6 divide-y divide-primary/10'>
            {items.map(renderItem)}
          </div>
        </div>
      ))}
    </div>
  );
};
