import { Button } from "@material-tailwind/react";
import { CardDefault } from "../../components/Card/Card";
import { WidgetsExample } from "../../components/WidgetsExample/WidgetsExample";
import Gallery from "../../components/Gallery/Gallery";
import Table from "../../components/Table/Table";

const Home = () => {
  return (
    <div>
      <WidgetsExample />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
      </div>

      <Gallery />
      <Table />

      <div>
        <video class="h-full w-full rounded-lg" controls>
          <source
            src="https://docs.material-tailwind.com/demo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Home;
