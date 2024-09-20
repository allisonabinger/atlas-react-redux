import { useDispatch } from "react-redux";
import deleteSVG from "../assets/deleteListButton.svg";
import { AppDispatch } from "../store";
import { removeList } from "../slices/ListSlice";

type DeleteListProps = {
  id: number;
  title: string;
};

const DeleteListButton = ({ id, title }: DeleteListProps) => {
  const dispatch: AppDispatch = useDispatch();

  const handleRemoveList = () => {
    const shouldRemove = confirm(
      `Are you sure you want to delete the list ${title}`
    );

    if (shouldRemove) {
      dispatch(removeList(id));
    }
  };

  return (
    <div className="flex justify-center mb-3">
        <button
          className="hidden h-[30px] w-[30px] cursor-pointer group-hover/list:block"
          onClick={handleRemoveList}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="{1.5}"
            stroke="#fffcf2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
        </button>
    </div>
  );
};

export default DeleteListButton;
