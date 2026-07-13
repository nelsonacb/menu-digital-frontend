import { create } from 'zustand';
import type { Categoria, Producto } from '../interfaces';
import api from '../services/api';

interface MenuState {
  categorias: Categoria[];
  productos: Producto[];
  loading: boolean;
  error: string | null;
  fetchMenu: () => Promise<void>;
  loadFromStorage: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  categorias: [],
  productos: [],
  loading: false,
  error: null,

  loadFromStorage: () => {
    const stored = localStorage.getItem('menuData');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        set({
          categorias: data.categorias || [],
          productos: data.productos || [],
        });
      } catch (e) {
        console.error('Error parsing localStorage menuData', e);
      }
    }
  },

  fetchMenu: async () => {
    set({ loading: true, error: null });
    try {
      const res = await api.get('/todo');
      const data = res.data;
      localStorage.setItem('menuData', JSON.stringify(data));
      set({
        categorias: data.categorias,
        productos: data.productos,
        loading: false,
      });
    } catch (error) {
      // Si falla, intentar usar localStorage
      const stored = localStorage.getItem('menuData');
      if (stored) {
        try {
          const data = JSON.parse(stored);
          set({
            categorias: data.categorias || [],
            productos: data.productos || [],
            loading: false,
            error: 'Usando datos en caché',
          });
        } catch (e) {
          set({ loading: false, error: 'Error al cargar datos' });
        }
      } else {
        set({ loading: false, error: 'No se pudo cargar el menú' });
      }
    }
  },
}));
