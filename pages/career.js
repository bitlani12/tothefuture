import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import { getRegularPage } from "@lib/contentParser";

const notFound = ({ data }) => {
  return (
    <Base>
     <h1 className="font-primary font-bold">Career page</h1>
    </Base>
  );
};


export default notFound;
