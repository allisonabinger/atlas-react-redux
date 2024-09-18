import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { addCard } from "../slices/CardSlice";


const NewCardForm = () => {
    const dispatch: AppDispatch = useDispatch();

    const handleNewCardSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (title.trim()) [
            dispatch(addCard)
        ]
    }
  return (
    <div className="group/new-card m-3 flex h-44 w-full justify-center">
      <form
        onSubmit={}
        className="hidden min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex"
      >
        <input
          className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none"
          autoFocus
          type="text"
          placeholder="Title"
          name="title"
        />
        <textarea
          className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none"
          placeholder="Description"
          name="description"
        ></textarea>
        <div className="buttons w-full">
          <button type="submit" className="w-full p-4">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCardForm;
