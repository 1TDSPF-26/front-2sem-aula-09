type CardProps = {
    title: string;
    nomeProduto: string;
};

export default function Card(props: CardProps) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Nome do produto: {props.nomeProduto}</p>
        </div>
    );
}