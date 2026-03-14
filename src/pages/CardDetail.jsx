import React from "react";

import { Link, useParams } from "react-router-dom";

const CardDetail = ({ board }) => {
  const { id } = useParams();
  const card =
    board.todo.find((c) => c.id === Number(id)) ||
    board.inProgress.find((c) => c.id === Number(id)) ||
    board.done.find((c) => c.id === Number(id));
  return (
    <div>
      <button>
        <Link to="/">Back</Link>
      </button>
      <div>
        <span>
          {card.title}
          {card.description}
        </span>
      </div>
      <div>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default CardDetail;
