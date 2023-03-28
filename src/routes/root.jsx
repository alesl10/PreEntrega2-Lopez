import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemsListContainer";
import { useParams } from "react-router-dom";
import { GlobalProvider } from '../context';

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <GlobalProvider>
      <NavBar />
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.id} />
    </GlobalProvider>
  );
}

export default Root;
