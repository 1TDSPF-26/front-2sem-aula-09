import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./globals.css";

//Importar os objetos do react-router:
import { createBrowserRouter, RouterProvider } from 'react-router';

//Importar os componentes de rotas:
import Home from './routes/Home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import Error from './routes/Error/index.tsx';
import Conteudo from './routes/Conteudo/index.tsx';


//Criando uma lista de objetos de rotas:
const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <Error />, children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/editar-produtos/:id", element: <EditarProdutos /> },
      //"/editar-produtos/:id" é o padrão para o react-router, se não for informado, ele vai procurar o padrão "editar-produtos" e vai procurar
      { path: "/conteudo", element: <Conteudo /> },
    ]
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
