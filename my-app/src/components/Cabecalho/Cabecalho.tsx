import Menu from "../Menu/Menu.tsx";

export default function Cabecalho() {

    return (
        <header className="bg-blue-500   text-white font-sans flex-row p-4">
            <h1>Meu componente</h1>
            <Menu />
        </header>
    );
}