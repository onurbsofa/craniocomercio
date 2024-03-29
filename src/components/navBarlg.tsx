export default function NavBarlg(){
    return (
        <div className="container flex h-16 items-center">
        <div className="flex-1">
            <h1 className="text-2xl font-bold">Craniocomercio</h1>
        </div>
        <nav className="flex-1 flex justify-end space-x-4 sm::hidden">
            <a href="#" className="text-lg">Inicio</a>
            <a href="#" className="text-lg">Productos</a>
            <a href="#" className="text-lg">Contacto</a>
        </nav>
    </div>
    );
}