const Footer = () => {
  return (
    <div className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
      <form>
        <input
          type="text"
          placeholder="Add List"
          name="title"
          className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="mr-3 rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
        >Save</button>
        <button
          type="button"
          className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
        >
          Clear Board
        </button>
      </form>
    </div>
  );
};

export default Footer;
