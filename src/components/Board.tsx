import List from "./List";
import { ListType } from "../types";
import { useAppSelector } from "../store";

const Board = () => {
  const lists = useAppSelector((state) => state.lists.lists)

  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex flex-row h-full space-x-4 rounded">
            {lists.map((list: ListType) => (
              <List key={list.id} id={list.id} title={list.title} />
            ))}
      </div>
    </div>
  );
};

export default Board;
