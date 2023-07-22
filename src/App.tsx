import Header from "./components/Header/Header";
import LeftScreen from "./components/LeftScreen/LeftScreen";
import RightScreen from "./components/RightScreen/RightScreen";

import styles from "./App.module.css";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <LeftScreen />
        <RightScreen />
      </main>
    </>
  );
}

export default App;
