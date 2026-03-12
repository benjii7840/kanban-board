import Board from "../components/Board";
import Sidebar from "../components/sideBar";

const Dashboard = ({ board, setBoard, handleAddCard, handleDeleteCard }) => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-900 h-full">
        <Sidebar />
      </div>
      <div className="bg-gray-100 h-full">
        <Board
          board={board}
          setBoard={setBoard}
          handleAddCard={handleAddCard}
          handleDeleteCard={handleDeleteCard}
        />
      </div>
    </div>
  );
};

export default Dashboard;
