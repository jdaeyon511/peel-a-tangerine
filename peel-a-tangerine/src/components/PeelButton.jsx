const PeelButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-orange-400 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-orange-500 transition"
  >
    Peel 🍊
  </button>
);

export default PeelButton;
