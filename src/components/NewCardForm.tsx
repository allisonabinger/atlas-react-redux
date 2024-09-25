import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { addCard } from "../slices/CardSlice";
import { useState } from "react";
import { addCardToList } from "../slices/ListSlice";

type NewCardFormProps = {
  listId: number;
};

const NewCardForm = ({ listId }: NewCardFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.trim()) {
      const newCard = {
        id: Date.now(),
        title,
        description,
        listId,
      };
      dispatch(addCard(newCard));
      dispatch(addCardToList({ listId, cardId: newCard.id }));

      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="group/new-card m-3 flex h-44 w-full justify-center">
      <form
        // onSubmit={}
        className="hidden min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex"
        onSubmit={handleSubmit}
      >
        <input
          className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none"
          autoFocus
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none"
          placeholder="Description"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
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
