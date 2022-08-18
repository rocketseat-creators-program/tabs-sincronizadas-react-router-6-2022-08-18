import { Products } from "./components/Product";
import { ProductDetail } from "./components/ProductDetail";

export const routesConfig = [
  {
    path: "products",
    title: "Produtos",
    component: <Products />,
  },
  {
    path: "products/:id",
    title: "Detalhe do Produto",
    component: <ProductDetail />,
    hiddenOnTab: true,
  },
  {
    path: "customers",
    title: "Clientes",
    component: <p>Página de Clientes</p>,
  },
  {
    path: "sell",
    title: "Vendas",
    component: <p>Página de Vendas</p>,
  },
  {
    path: "stock",
    title: "Estoque",
    component: <p>Página de Estoque</p>,
  },
];
