import List from "./List";
import { CardType, ListType } from "../types";
import { useAppDispatch, useAppSelector } from "../store";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { moveCard, removeCardFromList } from "../slices/ListSlice";
// import { addCardToList, removeCardFromList } from "../slices/ListSlice";

const Board = () => {
    const lists = useAppSelector((state) => state.lists.lists);
    const cards = useAppSelector((state: RootState) => state.cards.cards);
    const dispatch = useAppDispatch();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = Number(active.id);
    const destinationId = over.id as number;

    console.log('Active ID:', activeId);
    // console.log('Destination List ID:', destinationListId);

    const sourceList = lists.find((list: ListType) => list.cardIds.includes(activeId));
    const destinationList = lists.find((list: ListType) => list.id === destinationId)

    if (!sourceList) {
        console.log("no source list")
    }
    console.log("source list:", sourceList)
    console.log("destination list: ", destinationList)

    const sourceListId = sourceList?.id;
    const destinationListId = destinationList?.id

    console.log("source list id:", sourceListId)
    console.log("destination list id: ", destinationListId)

    if (
      sourceListId &&
      destinationListId &&
      sourceListId && destinationListId
    ) {
      dispatch(
        moveCard({
          cardId: activeId,
          sourceListId: sourceListId,
          destinationListId: destinationListId,
        })
      );
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
        <div className="flex flex-row h-full space-x-4 rounded">
          {lists.map((list: ListType) => {
            const listCards = cards.filter((card: CardType) => card.listId === list.id);

            return (
              <List
                key={list.id}
                id={list.id}
                title={list.title}
                cards={listCards} // Pass filtered cards to the List component
              />
            );
          })}
        </div>
      </div>
    </DndContext>
  );
};

export default Board;
