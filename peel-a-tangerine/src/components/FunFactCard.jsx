const FunFactCard = ({ fact, onNext }) => (
  <div className="bg-white p-4 rounded-xl shadow text-center max-w-sm">
    <h2 className="text-xl font-bold mb-2">🍊 Did you know?</h2>
    <p className="text-lg mb-3">{fact}</p>
    <button
      onClick={onNext}
      className="text-sm text-orange-600 hover:underline"
    >
      🔁 Next Fact
    </button>
  </div>
);

export default FunFactCard;
