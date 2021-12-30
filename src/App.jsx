import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./components/Card/Card";
import Carousel from "./components/Carousel";
import Image1 from "./components/imagen/Julie.jpg";
import Image2 from "./components/imagen/logoAv.jpg";
import Image3 from "./components/imagen/logoetb.jpg";
import Image4 from "./components/imagen/logotroll.jpg";
import Image5 from "./components/imagen/portafolio.jpg";
import Image6 from "./components/imagen/logojenos.jpg";
import table from "./Heuristica ETB.pdf";
import Image7 from "./components/imagen/correo.png";
import Image8 from "./components/imagen/curriculum.png";

function App() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image1}
          title="Dashboard, Julie"
          parrafo="Este Dashboard fue creado para imitar por medio de React y SCSS a través de componentes una página, a partir de un diseño inicial copiado al mas mínimo detalle."
          NameButton="Code"
          link1="https://trabajo-scss.vercel.app/"
          link2="https://github.com/Sagalo04/TrabajoSCSS"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image2}
          title="Surrealismo"
          parrafo="Aquí encontrarás algunas de las piezas surrealistas que he realizado en este 2021. Esta maravillosa herramienta me ha permitido explotar mi creatividad."
          nboton={1}
          link1="/Retoque"
          external={true}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image3}
          title="ETB"
          parrafo="Etb es una empresa de Telecomunicaciones ubicada en la ciudad de Bogotá. Sú sitio web se encuentra con muchos errores respecto del diseño UI/UX, una página con exceso de información como su principal problema"
          link1="https://www.figma.com/file/Wr93lI1bsZ4r30v0AHhlCY/Untitled?node-id=0%3A1"
          link2={table}
          NameButton="Tabla UX"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image4}
          title="Trollhunters"
          parrafo="Es una serie de animaciónpor Guillermo del Toro para Netflix. En esta página se compilan los personajes de la serie y sus caracteristicas, y algunos de los momentos para importantes de cada una de sus temporadas."
          nboton={1}
          link1="https://www.figma.com/file/gvPPvkdtcwNN9iYG2Ws8kb/Trolls-Hunters?node-id=0%3A1"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image5}
          title="Portafolio profesional"
          parrafo="Este portafolio fue creado para el Ingeniero Multimedia Santiago García Lopez de la Universidad Autonoma de Occidente de Cali para mostrar cada uno de sus proyectos."
          nboton={1}
          link1="https://portafolio-zeta-seven.vercel.app/"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image6}
          title="Jeno's Pizza"
          parrafo="Jeno's Pizza, cadena de restaurantes fundada en 1973 por Alfredo Gracia y Hernando Soto. Se crea una Food Delivery App para Jeno's Pizza la cual busca enfocarse en la interfaz de usuario y la usabilidad."
          nboton={1}
          link1="https://www.figma.com/file/acs4SdvsHqsHQBiUkToRHt/Jenos-pizza?node-id=0%3A1"
        />
      ),
    },
  ];

  return (
    <div className="App">
      <div className="icons">
        <img src={Image7} className="img_icon" alt="icon mail"/>
        <img src={Image8} className="img_icon_b" alt="icon cv"/>
      </div>
      <Carousel
        cards={cards}
        height="500px"
        width="55%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default App;
