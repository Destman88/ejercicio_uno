import "./App.css";
import ComponenteA from "./components/componenteA";

function App() {
  const nuevoContacto = {
    nombre: "Derick",
    apellido: "Maitland",
    email: "derickm@mail.com",
    conectado: false,
  };
  return (
    <div className="App">
      <ComponenteA contacto={nuevoContacto} />
    </div>
  );
}

export default App;
