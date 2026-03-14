import { useNavigate } from "react-router-dom";

const Card = ({ card, columnId, handleDeleteCard }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer mb-2 border-l-4 border-l-blue-400"
      onClick={() => navigate(`/card/${card.id}`)}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700 font-medium">{card.title}</span>
        <button
          className="text-gray-300 hover:text-red-400 transition text-sm"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteCard(columnId, card.id);
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Card;
