export default function Cabecalho(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Nome do Produto: {props.description}</p>
        </div>
    );
}