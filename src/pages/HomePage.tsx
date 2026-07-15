import { useEffect } from 'react';
import { useMenuStore } from '../store/menuStore';
import { CategoryCard } from '../components/CategoryCard';
import { Layout } from '../components/Layout';

export const HomePage = () => {
  const { categorias, fetchMenu, loadFromStorage } = useMenuStore();

  useEffect(() => {
    loadFromStorage();
    fetchMenu();
  }, []);

  return (
    <Layout>
      <div className='flex flex-col items-center text-center mb-12'>
        <h1 className='text-5xl md:text-7xl font-serif font-bold text-primary tracking-wide'>
          Chilao
        </h1>
        <p className='text-lg md:text-xl text-primary/70 mt-2 font-light tracking-widest'>
          Bar & Restaurante
        </p>
        <div className='w-24 h-0.5 bg-primary/30 mt-4'></div>
        <p className='text-sm font-bold text-primary/50 mt-4 max-w-md'>
          Explora nuestra carta y descubre una experiencia única en cada plato y
          cóctel.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {categorias.map((cat) => (
          <CategoryCard
            key={cat.id}
            categoria={cat}
          />
        ))}
      </div>
    </Layout>
  );
};
