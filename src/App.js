import { JotaiCounter } from "./jotai/JotaiCounter";
import { ReduxCounter } from "./redux/ReduxCounter";
import { ZustandCounter } from "./zustand/ZustandCounter";

function App() {
  return (
    <>
      {/* <JotaiCounter />
      <ReduxCounter /> */}
      <ZustandCounter />
    </>
  );
}

export default App;
