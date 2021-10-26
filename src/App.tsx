import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { AppRouting } from "./routes/AppRouting";
import "./App.scss";
import { ReduxProvider } from "./providers/ReduxProvider";

function App() {
  return (
    <BrowserRouter>
      <ReduxProvider>
        <h1 className="App__title">
          Test <strong>Beetrack</strong>
        </h1>
        <AppRouting />
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default App;
