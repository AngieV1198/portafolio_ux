import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./components/Card/Card";
import Carousel from "./components/Carousel";
//import Image1 from "./components/imagen/Julie.jpg";
//import Image2 from "./components/imagen/logoAv.jpg";
//import Image3 from "./components/imagen/logoetb.jpg";
import Image4 from "./components/imagen/logotroll.jpg";
//import Image5 from "./components/imagen/portafolio.jpg";
import Image6 from "./components/imagen/logojenos.jpg";
//import table from "./Heuristica ETB.pdf";
//import Image7 from "./components/imagen/correo.png"//;
//import Image8 from "./components/imagen/curriculum.png";//
//import table2 from "./Angie Varela HV.pdf";
//import Image9 from "./components/imagen/Rectangle 95.jpg";
import Image10 from "./components/imagen/Group 34.jpg";
import Image11 from "./components/imagen/Group 188.jpg";
import Image13 from "./components/imagen/Group 6.jpg";
import Image14 from "./components/imagen/Group 41.jpg";
import Image18 from "./components/imagen/la huerta.jpg";
import Image19 from "./components/imagen/ritmos.png";
import Image20 from "./components/imagen/belisario.png";

function App() {
  let cards = [
    //{
      //key: uuidv4(),
      //content: (
        //<Card
          //imagen={Image1}
         // title="Dashboard, Julie"
         // parrafo="Este Dashboard fue creado para imitar por medio de React y SCSS a través de componentes, una página, a partir de un diseño inicial copiado al más mínimo detalle."
         // NameButton="Code"
          //link1="https://trabajo-scss.vercel.app/"
         // link2="https://github.com/Sagalo04/TrabajoSCSS"
        ///>
    //  ),
  //  },
    //{
      //key: uuidv4(),
      //content: (
       // <Card
         // imagen={Image2}
         // title="Surrealismo"
          //parrafo="Aquí encontrarás algunas de las piezas surrealistas que he realizado, mostrando algunas de mis capacidades para el retoque de fotografía y el retoque artístico."
         // nboton={1}
         // link1="/Retoque"
         // external={true}
       // />
     // ),
   // },
    //{
      //key: uuidv4(),
      //content: (
       // <Card
         // imagen={Image3}
         // title="ETB"
         // parrafo="Etb es una empresa de Telecomunicaciones ubicada en la ciudad de Bogotá. Su sitio web se encuentra con muchos errores respecto del diseño UI/UX, una página con exceso de información como su principal problema"
          //link1="https://www.figma.com/file/Wr93lI1bsZ4r30v0AHhlCY/Untitled?node-id=0%3A1"
          //link2={table}
          //NameButton="Tabla UX"
        //>
      //),
   // },
   {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image4}
          title="Trollhunters"
          parrafo="Es una serie de animación por Guillermo del Toro para Netflix. En esta página se compilan los personajes de la serie y sus características, y algunos de los momentos para importantes de cada una de sus temporadas."
          nboton={1}
          //link1="https://www.figma.com/file/gvPPvkdtcwNN9iYG2Ws8kb/Trolls-Hunters?node-id=0%3A1"
        />
      ),
    },
    //{
      //key: uuidv4(),
      //content: (
        //<Card
         // imagen={Image5}
         // title="Portafolio profesional"
         // parrafo="Este portafolio fue creado para el Ingeniero Multimedia Santiago García López de la Universidad Autónoma de Occidente de Cali para mostrar cada uno de sus proyectos."
         // nboton={1}
         // link1="https://portafolio-zeta-seven.vercel.app/"
        ///>
    //  ),
   // },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image6}
          title="Jeno's Pizza"
          parrafo="Jeno's Pizza, cadena de restaurantes fundada en 1973 por Alfredo Gracia y Hernando Soto. Se crea una Food Delivery App para Jeno's Pizza la cual busca enfocarse en la interfaz de usuario y la usabilidad."
          nboton={1}
         // link1="https://www.figma.com/file/acs4SdvsHqsHQBiUkToRHt/Jenos-pizza?node-id=0%3A1"
        />
      ),
    },
    //{
      //key: uuidv4(),
      //content: (
        //<Card
          //imagen={Image9}
          //title="AssulOne"
          //parrafo="AssulOne es una startup dedicada al desarrollo de páginas web y portafolios profesionales."
          //nboton={1}
          //link1="https://www.figma.com/file/cYBhkhCWjXpVzYcTDHqaIG/Assul-One?node-id=0%3A1"
        ///>
      //),
    //},
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image10}
          title="DINO WALLET"
          parrafo="Dino Wallet es una billetera Virtual que permite no solo enviar y recibir transferencias, también hasta pagar tú factura hasta tus vacaciones."
          nboton={1}
          //link1="https://www.figma.com/file/n72qdLFuGdel4TuhuHVUJL/DINO?node-id=0%3A1"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image11}
          title="Universidad de Yale"
          parrafo="Yale es una universidad privada ubicada en New Haven, Estados Unidos, tiene una de las mejores escuelas de Bellas Artes a nivel mundial. Este proyecto trata sobre el rediseño en versión responsive de su página web."
          ///link1="https://www.figma.com/file/yzYylBkWpnbQSJyWCsXEeY/Universidad-de-Yale?node-id=0%3A1"
         /// link2="https://www.figma.com/proto/oxXZhyO7bb7Ufo4SSNIcoQ/Tercer-entrega-final?page-id=0%3A1&node-id=1%3A2&viewport=522%2C237%2C0.33&scaling=contain"
          NameButton="UX"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image13}
          title="Amazon"
          parrafo="Amazon es la empresa en internet de venta al por menor más grande del mundo. Este proyecto trata del rediseño de la página web de Amazon, siendo este más atractivo y limpio para el usuario."
          //link1="https://www.figma.com/file/Y39UtUr4GOFrFiBFYejJcF/Amazon?node-id=0%3A1"
          //link2="https://www.figma.com/file/5BLmJi0JumPvudZ97XbAAp/Design-System-Angie-Varela?node-id=0%3A1"
          NameButton="D-SYSTEM"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image14}
          title="Alejandro Gaviria"
          parrafo="Alejandro fue parte de las elecciones presidenciales de Colombia como candidato a la presidencia. Este proyecto se trató del rediseño de su página-blog personal."
          nboton={1}
        //  link1="https://www.figma.com/file/8uXb9VnQD7reCN30CgW9u6/AG?node-id=0%3A1"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image18}
          title="La huerta hotel"
          parrafo="Este proyecto con Imaginamos S.A.S., la huerta hotel es un hotel campestre ubicado en el Lago Calima."
          nboton={1}
          //link1="https://www.figma.com/proto/PDMI5Xzc72V7rCXz1Ehlbs/La-huerta-Hotel?page-id=0%3A1&node-id=10%3A253&scaling=scale-down-width"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image19}
          title="Ritmos de Colombia"
          parrafo="Este proyecto con Imaginamos S.A.S., es un sitio web oficial que nos muestra actividades para hacer como turista en algunas ciudades de Colombia."
          nboton={1}
         // link1="https://www.figma.com/proto/CKGxKWMud5sfBj7lsGR6CO/Ritmos-de-Colombia-Angie-Varela?page-id=0%3A1&node-id=1%3A2&viewport=488%2C113%2C0.17&scaling=scale-down-width"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Image20}
          title="Promotora Belisario Marin"
          parrafo="Este proyecto, con Imaginamos S.A.S., es una agencia de viajes que ofrece estadía, tiquetes, paquetes turísticos a destinos Nacionales e Internacionales."
          nboton={1}
         // link1="https://www.figma.com/proto/QWNybwc0IBKdO5dEOKBLHn/Promotora-Belisario-Marin-Angie-Varela?page-id=0%3A1&node-id=3%3A88&viewport=-191%2C719%2C0.23&scaling=scale-down-width"
        />
      ),
    },
  ];

  return (
    <div className="App">
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
