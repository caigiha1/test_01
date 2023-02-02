import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CardItem from "./components/CardItem";
import PencilIcon from "./assets/Vector.png";
import MakerIcon from "./assets/make.svg";
import PaintIcon from "./assets/paint.svg";
import NoteBookIcon from "./assets/notebook.svg";
import arrowup from "./assets/arrowup.svg";
import arrowdown from "./assets/arrowdown.svg";
import galerry1 from "./assets/Rectangle21.png";
import galerry2 from "./assets/Rectangle23.png";
import galerry3 from "./assets/Rectangle24.png";
import galerry4 from "./assets/Rectangle25.png";
import galerry5 from "./assets/Rectangle26.png";
import galerry6 from "./assets/Rectangle27.png";
import galerry7 from "./assets/Rectangle28.png";
import ProductCard from "./components/ProductCard";
import InfomationCard from "./components/InfomationCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app font-Poppins h-screen">
      <div className="sm:grid sm:grid-cols-1 sm:grid-rows-[120px_700px_100px_100px_100px] sm:gap-y-[10px] sm:first:gap-y-[0px] sm:last:gap-y-[0px] bg-background-primary">
        <div className="bg-background-secondary">
          <CardItem icon={PencilIcon} title="Pencils" arrow={arrowup} />
        </div>
        <div className="bg-background-secondary">
          <CardItem icon={MakerIcon} title="Markers" arrow={arrowdown} />
        </div>
        <div className="bg-background-secondary rounded-[10px]">
          <CardItem icon={PaintIcon} title="Drawing Colors" arrow={arrowdown} />
        </div>
        <div className="bg-background-secondary">
          <CardItem icon={NoteBookIcon} title="Notebooks" arrow={arrowdown} />
        </div>
        <div className="sm:row-start-2 sm:row-end-3 bg-background-secondary ">
          <InfomationCard />
        </div>
      </div>
    </div>
  );
}

export default App;
