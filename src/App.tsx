import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { AppRouting } from "./routes/AppRouting";
import "./App.scss";
import { ContactsProvider } from "./providers/ContactsProvider";

function App() {
  return (
    <BrowserRouter>
      <ContactsProvider>
        <h1 className="App__title">
          Test <strong>Beetrack</strong>
        </h1>
        <AppRouting />
      </ContactsProvider>
    </BrowserRouter>
  );
}

export default App;
