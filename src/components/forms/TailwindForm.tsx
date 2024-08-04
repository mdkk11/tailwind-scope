export const TailwindForm = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h3>Tailwind Form</h3>
      <input
        className="my-3 p-2 w-full border max-w-60 rounded-sm"
        type="text"
        placeholder="Your Name"
      />
      <input
        type="email"
        className="my-3 p-2 w-full border max-w-60 rounded-sm"
        placeholder="Your Email"
      />
      <button
        className="py-2 px-4 bg-[#0000FF] text-white rounded-md "
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};
