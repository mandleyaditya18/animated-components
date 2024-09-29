import { ButtonWithLoader } from "./components/ButtonWithLoader";
import { Tab } from "./components/Tab";

function App() {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <ButtonWithLoader />
      <Tab />
    </div>
  );
}

export default App;
