import deleteSVG from "../assets/deleteCardButton.svg";

type CardProps = {
  id: number;
  title: string;
  description: string;
  listId: number;
};

const Card = ({ id, title, description, listId }: CardProps) => {
  return (
    <div className="card group/card m-3 flex min-h-24 w-full max-w-96 flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue">
      <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
        {title}
        <button>
          <img src={deleteSVG} alt="delete card" />
        </button>
      </h5>
      <p className="mt-0 text-left">{description}</p>
    </div>
  );
};

export default Card;
