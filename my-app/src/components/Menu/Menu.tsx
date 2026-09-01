import { Link } from "react-router";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Produtos</Link></li>
        <li><Link to="/">Conteudo</Link></li>
      </ul>
    </nav>
  );
}
