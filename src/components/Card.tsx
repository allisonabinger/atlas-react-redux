import { useSortable } from "@dnd-kit/sortable";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { removeCard } from "../slices/CardSlice";
import { removeCardFromList } from "../slices/ListSlice";
import { PointerSensor, useSensor, useSensors } from "@dnd-kit/core";

type CardProps = {
  id: number;
  title: string;
  description: string;
  listId: number;
};

const Card = ({ id, title, description, listId }: CardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const dispatch: AppDispatch = useDispatch();

  const handleRemoveCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("delete button pushed");
    dispatch(removeCardFromList({ listId, cardId: id }));
    dispatch(removeCard(id));
  };


  return (
    <div
      className="card group/card m-3 flex min-h-24 w-full max-w-96 flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue"
      ref={setNodeRef}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
        transition,
      }}
      {...attributes}
      {...listeners}
    >
      <div className="my-2 flex w-full justify-between text-xl font-black">
        <h5 className="text-xl font-black">{title}</h5>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          className="hidden cursor-pointer group-hover/card:flex h-[30px] w-[30px] justify-center"
          onClick={handleRemoveCard}
        >
          <svg
            className="h-[20px] w-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="#00003c"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </button>
      </div>
      <p className="mt-0 text-left">{description}</p>
    </div>
  );
};

export default Card;
