export interface Categoria {
  id: string;
  nombre: string;
  orden: number;
}

export interface Producto {
  id: string;
  nombre: string;
  descripcion?: string;
  precio: number;
  precioUSD: number;
  categoriaId: string;
  subcategoria?: string;
}
