function Square({ value, onSquareClick }) {
  return (
    <button className="border w-20 h-20 flex items-center text-4xl font-semi-bold justify-center" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
