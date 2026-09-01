export default function Card(props: { title: string, nomeProduto: string }) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Nome do produto :{props.nomeProduto}</p>
        </div>
    );
}