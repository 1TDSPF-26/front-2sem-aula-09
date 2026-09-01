import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./routes/Conteudo";
import Rodape from "./components/Rodape/Rodape.tsx";

export default function App() {

  return (
    <div>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </div>
  );
}