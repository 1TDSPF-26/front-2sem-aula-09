import Card from "../../components/CardProduto/CardProduto";

export default function Conteudo(){
  return(
    <main>
        <h2>Conteúdo aleatório</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae nemo et eum deleniti, dolorum iure unde laborum enim minima veniam cum rerum, facilis quisquam ab quis, ipsam veritatis. Maxime?</p>
        <Card title="Meu primeiro Card" nomeProduto="Tv" />
        <Card title="Meu segundo Card" nomeProduto="Microfone" />
    </main>
  );
}
