import List from "./List";

const Board = () => {
  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        <List title="List 1" />
        <List title="List 1" />
        <List title="List 1" />
      </div>
    </div>
  );
};

export default Board;
