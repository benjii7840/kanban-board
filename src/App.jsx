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
  function handleAddCard(columnId, title) {
    const newCard = {
      id: Date.now(),
      title: title,
      description: "",
    };
    setBoard({ ...board, [columnId]: [...board[columnId], newCard] });
  }
  function handleDeleteCard(columnId, cardId) {
    setBoard({
      ...board,
      [columnId]: board[columnId].filter((card) => card.id !== cardId),
    });
  }
  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard
            board={board}
            setBoard={setBoard}
            handleAddCard={handleAddCard}
            handleDeleteCard={handleDeleteCard}
          />
        }
      />
      <Route path="/card/:id" element={<CardDetail board={board} />} />
    </Routes>
  );
};

export default App;
