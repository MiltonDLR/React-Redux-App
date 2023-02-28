import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
// Redux
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <UserList />
    </Provider>
  );
}

export default App;
