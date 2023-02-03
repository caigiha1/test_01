import "./App.css";

// Component
import CardItem from "./components/CardItem";
import Dot from "./components/Dot";
import InfomationCard from "./components/InfomationCard";
import Gallery from "./components/Gallery";

// Icon
import PencilIcon from "./assets/Vector.png";
import MakerIcon from "./assets/make.svg";
import PaintIcon from "./assets/paint.svg";
import NoteBookIcon from "./assets/notebook.svg";
import arrowup from "./assets/arrowup.svg";
import arrowdown from "./assets/arrowdown.svg";

function App() {
  return (
    <div className="app font-Poppins h-screen md:w-[1200px] md:m-[108px_142px_90px_98px] ">
      <div className="grid grid-cols-2 grid-rows-[120px_700px_100px_100px_100px] bg-background-primary m-[1px] md:grid-cols-4 md:grid-rows-[200px_500px] ">
        <div className="bg-background-secondary col-start-1 col-end-3 rounded-t-[18px] md:col-start-1 md:col-end-2 ">
          <CardItem icon={PencilIcon} title="Pencils" arrow={arrowup} />
        </div>
        <div className="bg-background-secondary border-2 border-background-primary rounded-[18px] col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:border-hidden md:bg-background-primary">
          <CardItem icon={MakerIcon} title="Markers" arrow={arrowdown} />
        </div>
        <div className="bg-background-secondary border-2 border-background-primary rounded-[18px] col-start-1 col-end-3  md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 md:border-hidden md:bg-background-primary">
          <CardItem icon={PaintIcon} title="Drawing Colors" arrow={arrowdown} />
        </div>
        <div className="bg-background-secondary border-2 border-background-primary rounded-[18px] col-start-1 col-end-3 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2 md:border-hidden md:bg-background-primary  ">
          <CardItem icon={NoteBookIcon} title="Notebooks" arrow={arrowdown} />
        </div>
        <div className="row-start-2 row-end-3 col-start-1 col-end-3 bg-background-secondary rounded-b-[18px] mb-[10px] md:col-start-1 md:col-end-5 md:row-start-2 md:row-end-3">
          <InfomationCard />
        </div>
      </div>
      <div className="flex items-center justify-center gap-[15px] m-[40px_0_60px_0]">
        <Dot color="bg-black-1" />
        <Dot color="bg-background-secondary" />
      </div>
      {/* GALLERRY  */}
      <div className="m-[1px]">
        <Gallery />
      </div>
      <div className="flex items-center justify-center gap-[15px] m-[40px_0_60px_0]">
        <Dot color="bg-background-secondary" />
        <Dot color="bg-black-1" />
      </div>
      <div className="h-[90px]"></div>
    </div>
  );
}

export default App;
