import Card from "../../components/Card/Card";

export default function Conteudo() {
    return (
        <main>
            <h1>Conteúdo Aleatório </h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptates commodi dolore necessitatibus.</p>
            <Card title="Meu primeiro Card" nomeProduto="Tv" />
            <Card title="Meu segundo Card" nomeProduto="Microfone" />
        </main>
    );
}