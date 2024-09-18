import { useSelector } from "react-redux";
import List from "./List";
import { ListType } from "../types";

const Board = () => {
  const lists = useSelector((state: RootState) => state.lists.lists);

  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        {lists.map((list: ListType) => (
          <List key={list.id} title={list.title} />
        ))}
      </div>
    </div>
  );
};

export default Board;
