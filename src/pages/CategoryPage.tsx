import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { useMenuStore } from '../store/menuStore';
import { ProductList } from '../components/ProductList';
import { Layout } from '../components/Layout';

export const CategoryPage = () => {
  const { categoriaId } = useParams<{ categoriaId: string }>();
  const { categorias, productos, loadFromStorage, fetchMenu } = useMenuStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
    fetchMenu().finally(() => setLoading(false));
  }, []);

  const categoria = categorias.find((c) => c.id === categoriaId);
  const productosFiltrados = productos.filter(
    (p) => p.categoriaId === categoriaId,
  );

  if (!categoria && !loading) {
    return (
      <Layout>
        <div className='text-center py-12'>
          <h2 className='text-3xl font-serif'>Categoría no encontrada</h2>
          <Link
            to='/'
            className='text-primary font-bold underline mt-4 inline-block'
          >
            Volver al inicio
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className='mb-6'>
        <Link
          to='/'
          className='inline-flex items-center text-primary/70 hover:text-primary transition-colors text-sm font-medium'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 mr-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
          Volver al inicio
        </Link>
      </div>
      <ProductList
        productos={productosFiltrados}
        titulo={categoria?.nombre || ''}
      />
    </Layout>
  );
};
