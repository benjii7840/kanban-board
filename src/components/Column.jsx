import React from "react";
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
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          {title}
        </h2>
        <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">
          {cards.length}
        </span>
      </div>
      <div>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            columnId={columnId}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </div>
      <div>
        {isAdding ? (
          <div>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter card title..."
            />
            <button
              onClick={() => {
                handleAddCard(columnId, inputValue);
                setInputValue("");
                setIsAdding(false);
              }}
            >
              Add
            </button>
            <button onClick={() => setIsAdding(false)}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => setIsAdding(true)}>+ Add Card</button>
        )}
      </div>
    </div>
  );
};

export default Column;
