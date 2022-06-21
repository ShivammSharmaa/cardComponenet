import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RatingCard } from "./components/RatingCard";
import { Thankyou } from "./components/Thankyou";

function App() {
  return (
    <>
      {/* <RatingCard />
      <Thankyou /> */}
      <Routes>
        <Route path="/" element={<RatingCard />} />
        <Route path="about" element={<Thankyou />} />
      </Routes>
    </>
  );
}

export default App;
