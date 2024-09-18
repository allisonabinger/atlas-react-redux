type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
    return (
        <div className="card group/card m-3 flex min-h-24 w-full max-w-96 flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue">
            <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">{title}</h5>
            <button className="hidden group-hover/card:block"><img src="" </button>
            <p className="mt-0 text-left">{description}</p>
        </div>
    )
}
