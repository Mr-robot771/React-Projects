import Square from "./components/Square";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [XisNext,setXIsNext]=useState(true);
  function handleclick(i) {
    if (squares[i]){
      return;
    }

    const nextSquares = squares.slice();
    if (XisNext){
      nextSquares[i]="X"
    }
    else {
      nextSquares[i]="O"
    }
   setSquares(nextSquares);
    setXIsNext(!XisNext);
  }
  return (
    <>
      <div className="grid grid-cols-3 border-2 w-fit">
        <Square value={squares[0]} onSquareClick={() => handleclick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleclick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleclick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleclick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleclick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleclick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleclick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleclick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleclick(8)} />
      </div>
    </>
  );
}

export default App;
