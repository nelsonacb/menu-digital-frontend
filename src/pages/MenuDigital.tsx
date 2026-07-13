import { useState, useEffect } from 'react';
import { useMenuStore } from '../store/menuStore';
import { CategoriasList } from '../components/CategoriasList';
import { ProductosGrid } from '../components/ProductosGrid';
import { BranchImage } from '../components/BranchImage';
import { WatermarkLogo } from '../components/WatermarkLogo';
import { ServiceCharge } from '../components/ServiceCharge';

export const MenuDigital = () => {
  const { categorias, productos, fetchMenu, loadFromStorage } = useMenuStore();
  const [categoriaActiva, setCategoriaActiva] = useState<string>('');

  useEffect(() => {
    loadFromStorage(); // rápido
    fetchMenu(); // actualiza
  }, []);

  useEffect(() => {
    if (categorias.length > 0 && !categoriaActiva) {
      setCategoriaActiva(categorias[0].id);
    }
  }, [categorias, categoriaActiva]);

  const productosFiltrados = productos.filter(
    (p) => p.categoriaId === categoriaActiva,
  );
  const tituloCategoria =
    categorias.find((c) => c.id === categoriaActiva)?.nombre || '';

  return (
    <div className='min-h-screen bg-[#DFCEBC] text-[#425340] relative font-sans'>
      <WatermarkLogo />

      <div className='container mx-auto px-4 py-8 md:py-12 pb-20 md:pb-24'>
        <div className='flex flex-col md:flex-row gap-6 md:gap-8 items-start'>
          <div className='w-full md:w-1/4 lg:w-1/5'>
            <CategoriasList
              categorias={categorias}
              categoriaActiva={categoriaActiva}
              onCategoriaClick={setCategoriaActiva}
            />
          </div>

          <div className='w-full md:w-1/4 lg:w-1/5 flex justify-center'>
            <BranchImage />
          </div>

          <div className='w-full md:w-1/2 lg:w-3/5'>
            <ProductosGrid
              productos={productosFiltrados}
              titulo={tituloCategoria}
            />
          </div>
        </div>
      </div>

      <ServiceCharge />
    </div>
  );
};
