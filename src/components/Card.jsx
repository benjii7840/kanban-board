import { useNavigate } from "react-router-dom";

const Card = ({ card, columnId, handleDeleteCard }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/card/${card.id}`)}
    >
      <div className="flex items-center justify-between">
        <span>{card.title}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("delete clicked");
            console.log("columnId:", columnId);
            console.log("card.id:", card.id);
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
