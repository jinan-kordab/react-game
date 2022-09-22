import React, { Suspense } from "react";
import Skelton from "./components/Skeleton";
import Tada from "react-reveal/Tada";
import GameContext from "./store/game-context";
import ErrorBoundary from "./components/helpers/ErrorBoundary";


const MainGrid = React.lazy(() => import("./components/MainGrid"));


function App() {
  return (
    //Context in case one needs to use it later on
    <GameContext.Provider
      value={{
        timerOn: false,
      }}
    >
      <Suspense fallback={<Skelton />}>
      <ErrorBoundary>
        <div>
          <Tada duration={2000} delay={800} count={2}>
            <MainGrid />
          </Tada>
        </div>
      </ErrorBoundary>
      </Suspense>
    </GameContext.Provider>
  );
}

export default App;
