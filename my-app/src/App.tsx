import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import Conteudo from "./routes/Conteudo";
Conteudo

export default function App() {

  return (
    <div>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </div>
  );
}