import deleteSVG from "../assets/deleteListButton.svg"

const DeleteListButton = () => {
  return (
    <button className="h-[30px]">
        <img src={deleteSVG} alt="Delete Button" className="hidden h-[30px] w-[30px] cursor-pointer group-hover/list:block"/>
    </button>
  );
};

export default DeleteListButton;
