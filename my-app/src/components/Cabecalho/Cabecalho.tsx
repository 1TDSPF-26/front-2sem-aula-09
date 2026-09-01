import Menu from "../Menu/menu";

export default function Cabecalho(){
    return (
        <div>

            <header className="bg-blue-800 text-white font-sans flex-row">
                <h1>Meu primeiro componente</h1>
                <Menu/>
            </header>

        </div>
    );
}