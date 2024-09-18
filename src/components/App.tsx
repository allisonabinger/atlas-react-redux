import { Provider } from "react-redux";
import { store } from "../store";
import Header from "./Header";
import Footer from "./Footer";
import DeleteListButton from "./DeleteListButton";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div>        <DeleteListButton /></div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
