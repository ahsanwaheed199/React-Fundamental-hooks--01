import "./App.css";
import DataFetching from "./components/dataFetchingByUsingId";
import DataFetchingUseEffect from "./components/dataFetchingUseEffect";
import HookUseEffect from "./components/hookUseEffect";
import HookUseEffectTwo from "./components/hookUseEffectTwo";
import LifeCycle from "./components/lifeCycle";
import LifeCycleThree from "./components/lifeCycleThree";
import LifeCycleTwo from "./components/lifeCycleTwo";
import SetStateWithArray from "./components/setStateWithArray";
import SetStateWithObject from "./components/setStateWithObject";
import UseState from "./components/useState";
import HookUseEffectThree from "./hookUseEffectThree";

function App() {
  return (
    <div className="App">
      {/* <UseState></UseState> */}
      {/* <SetStateWithObject /> */}
      {/* <SetStateWithArray /> */}
      {/* <LifeCycle /> */}
      {/* <HookUseEffect /> */}
      {/* <LifeCycleTwo /> */}
      {/* <HookUseEffectTwo /> */}
      {/* <LifeCycleThree /> */}
      {/* <HookUseEffectThree /> */}
      {/* <DataFetchingUseEffect /> */}
      <DataFetching />
    </div>
  );
}

export default App;
