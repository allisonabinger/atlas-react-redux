import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { addList, clearBoard } from "../slices/ListSlice";
import { useState } from "react";

const Footer = () => {
    const [title, setTitle] = useState<string>("");

    const dispatch: AppDispatch = useDispatch();

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (title.trim()) {
            dispatch(addList({
                id: Date.now(),
                title,
                cards: []
            }))
            setTitle("");
        }
    }

    const handleClearBoard = () => {
        dispatch(clearBoard());
    }

  return (
    <div className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add List"
          name="title"
          value={title}
          onChange={handleTitleChange}
          className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="mr-3 rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
        >Save</button>
        <button
          type="button"
          className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
          onClick={handleClearBoard}
        >
          Clear Board
        </button>
      </form>
    </div>
  );
};

export default Footer;
