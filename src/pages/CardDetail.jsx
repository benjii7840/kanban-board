import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const CardDetail = ({ board, handleUpdateCard }) => {
  const { id } = useParams();
  const card =
    board.todo.find((c) => c.id === Number(id)) ||
    board.inProgress.find((c) => c.id === Number(id)) ||
    board.done.find((c) => c.id === Number(id));

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(card?.title || "");
  const [editDescription, setEditDescription] = useState(
    card?.description || "",
  );

  if (!card) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400">Card not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="text-sm text-blue-500 hover:text-blue-600 transition mb-6 inline-block"
        >
          ← Back to Board
        </Link>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-6">
            {isEditing ? (
              <input
                className="text-2xl font-bold text-gray-800 border-b-2 border-blue-400 focus:outline-none w-full mr-4"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            ) : (
              <h1 className="text-2xl font-bold text-gray-800">{card.title}</h1>
            )}
            {isEditing ? (
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handleUpdateCard(card.id, editTitle, editDescription);
                    setIsEditing(false);
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-gray-400 hover:text-gray-600 text-sm px-4 py-2 transition"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition"
              >
                Edit
              </button>
            )}
          </div>
          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Description
            </h2>
            {isEditing ? (
              <textarea
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                rows={4}
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                placeholder="Add a description..."
              />
            ) : (
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description || "No description yet."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
