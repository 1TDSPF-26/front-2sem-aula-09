import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./global.css";

//importar objetos de rota do react-router
import { createBrowserRouter, RouterProvider } from 'react-router';

//importar os componentes de rota
import Home from './routes/Home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProduto/index.tsx';
import Error from './routes/Error/index.tsx';
import Corpo from './routes/Corpo/index.tsx';


//Criando uma lista de objetos de rota
const router = createBrowserRouter([
  {path: "/", element:<App/>, errorElement:<Error/>, children:[
    {path: "/", element:<Home/>},
    {path: "/produtos", element:<Produtos/>},
    {path: "/editar-produtos/:id", element:<EditarProdutos/> },
    {path: "/conteudo", element:<Corpo/>},

  ]},
  
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
