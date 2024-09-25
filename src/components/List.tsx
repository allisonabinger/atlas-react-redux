import DeleteListButton from "./DeleteListButton";
import NewCardForm from "./NewCardForm";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { CardType } from "../types";
import Card from "./Card";
import { useState } from "react";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { moveCard } from "../slices/CardSlice";
import { addCardToList, removeCardFromList } from "../slices/ListSlice";

type ListProps = {
  id: number;
  title: string;
  cards: CardType[];
};

const List = ({ id, title, cards }: ListProps) => {

  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      className="group/list h-full min-w-96 p-4 text-[#fffcf2]"
      ref={setNodeRef}
    >
      <DeleteListButton id={id} title="title" />
      <h3>{title}</h3>
      <SortableContext
        items={cards.map((card) => card.id)}
        strategy={verticalListSortingStrategy}
      >
        {cards.map((card: CardType) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            listId={id}
          />
        ))}
      </SortableContext>
      <NewCardForm listId={id} />
    </div>
  );
};

export default List;
