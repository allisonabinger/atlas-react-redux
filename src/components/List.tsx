import DeleteListButton from "./DeleteListButton";
import Card from "./Card";
type ListProps = {
  title: string;
};

const List = ({ title }: ListProps) => {
  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton />
      <h3>{title}</h3>
      <Card title="Card 1" description="Card 1 description" />
      <Card title="Card 2" description="Card 2 description" />
      <Card title="Card 3" description="Card 3 description" />
    </div>
  );
};

export default List;
