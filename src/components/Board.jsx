import React from "react";
import Column from "./Column";

const Board = ({ board, setBoard, handleAddCard, handleDeleteCard }) => {
  return (
    <div>
      <div className="flex gap-6 p-6">
        <div className="bg-white rounded-xl p-4 w-72 min-h-96">
          <Column
            title="To Do"
            cards={board.todo}
            columnId="todo"
            handleAddCard={handleAddCard}
            handleDeleteCard={handleDeleteCard}
          />
        </div>
        <div className="bg-white rounded-xl p-4 w-72 min-h-96">
          <Column
            title="In Progress"
            cards={board.inProgress}
            columnId="inProgress"
            handleAddCard={handleAddCard}
            handleDeleteCard={handleDeleteCard}
          />
        </div>
        <div className="bg-white rounded-xl p-4 w-72 min-h-96">
          <Column
            title="Done"
            cards={board.done}
            columnId="done"
            handleAddCard={handleAddCard}
            handleDeleteCard={handleDeleteCard}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
