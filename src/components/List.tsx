import DeleteListButton from "./DeleteListButton";
import NewCardForm from "./NewCardForm";
import { RootState, useAppSelector } from "../store";
import { CardType } from "../types";
import Card from "./Card";

type ListProps = {
    id: number;
  title: string;
};

const List = ({ id, title }: ListProps) => {
    const list = useAppSelector((state: RootState) => state.lists.lists.find((list) => list.id === id))

    const cards = useAppSelector((state: RootState) => state.cards.cards.filter((card) => list?.cardIds.includes(card.id)))
  return (
    <div className="group/list h-full min-w-96 p-4 text-[#fffcf2]">
      <DeleteListButton id={id} title="title"/>
      <h3>{title}</h3>
      {cards.map((card: CardType) => (
        <Card key={card.id} id={card.id} title={card.title} description={card.description} listId={id}/>
      ))}
      <NewCardForm listId={id} />
    </div>
  );
};

export default List;
