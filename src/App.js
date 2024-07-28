import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
