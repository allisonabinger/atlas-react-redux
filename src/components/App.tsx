import { Provider } from "react-redux";
import { store } from "../store";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
