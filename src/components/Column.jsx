import { useState } from "react";
import Card from "./Card";

const Column = ({
  title,
  cards,
  columnId,
  handleAddCard,
  handleDeleteCard,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          {title}
        </h2>
        <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">
          {cards.length}
        </span>
      </div>
      <div className="flex flex-col">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            columnId={columnId}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </div>
      <div className="mt-2">
        {isAdding ? (
          <div>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter card title..."
              autoFocus
            />
            <div className="flex gap-2">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1.5 rounded-lg transition"
                onClick={() => {
                  handleAddCard(columnId, inputValue);
                  setInputValue("");
                  setIsAdding(false);
                }}
              >
                Add
              </button>
              <button
                className="text-gray-400 hover:text-gray-600 text-sm px-3 py-1.5 transition"
                onClick={() => setIsAdding(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            className="text-gray-400 hover:text-gray-700 text-sm transition w-full text-left mt-2"
            onClick={() => setIsAdding(true)}
          >
            + Add Card
          </button>
        )}
      </div>
    </div>
  );
};

export default Column;
