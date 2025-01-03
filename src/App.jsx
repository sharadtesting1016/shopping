import { useState } from "react";
import AppRouter from "./Router";
import UserProvider from "./components/UserContext";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="container">
        <h1>Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </>
  );
}

export default App;
