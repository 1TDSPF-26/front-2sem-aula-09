export default function Card(props:any) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Nome do produto :{props.nomeProduto}</p>
        </div>
    );
}