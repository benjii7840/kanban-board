import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CardDetail from "./pages/CardDetail";
import { useEffect, useState } from "react";

const App = () => {
  const [board, setBoard] = useState(() => {
    const save = localStorage.getItem("board");
    return save
      ? JSON.parse(save)
      : {
          todo: [],
          inProgress: [],
          done: [],
        };
  });
  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);
  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard board={board} setBoard={setBoard} />}
      />
      <Route path="/card/id" element={<CardDetail />} />
    </Routes>
  );
};

export default App;
