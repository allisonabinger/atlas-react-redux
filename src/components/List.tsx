import DeleteListButton from "./DeleteListButton";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import NewCardForm from "./NewCardForm";

type ListProps = {
  title: string;
};

const List = ({ title }: ListProps) => {
  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton />
      <h3>{title}</h3>
      <NewCardForm />
    </div>
  );
};

export default List;
