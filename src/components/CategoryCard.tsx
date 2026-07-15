import { Link } from 'react-router';
import type { Categoria } from '../interfaces';

interface Props {
  categoria: Categoria;
}

export const CategoryCard = ({ categoria }: Props) => {
  return (
    <Link
      to={`/categoria/${categoria.id}`}
      className='block group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-primary/10'
    >
      <div className='p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[160px] md:min-h-[200px] bg-gradient-to-br from-white to-secondary/30 group-hover:to-secondary/60 transition-colors'>
        <span className='text-4xl md:text-5xl font-serif font-bold text-primary mb-2 group-hover:scale-105 transition-transform'>
          {categoria.nombre}
        </span>
        <div className='w-12 h-0.5 bg-primary/50 group-hover:w-16 transition-all'></div>
        <span className='text-sm text-primary/70 mt-3 group-hover:text-primary'>
          Ver productos →
        </span>
      </div>
    </Link>
  );
};
