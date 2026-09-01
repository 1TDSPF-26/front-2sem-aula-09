import { Link } from "react-router";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Item-2</li>
        <li>Item-3</li>
      </ul>
    </nav>
  );
}
