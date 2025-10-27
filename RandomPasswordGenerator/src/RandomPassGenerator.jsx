import { useState, useEffect, useCallback, useRef } from "react";

function RandomPassGenerator() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("password");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()_+=-[]{}";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, number, character]);

  //useRef function
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character]);

  return (
    <div className="bg-black w-full min-h-screen text-white flex items-center justify-center py-8">
      {/* Container: responsive width with padding. We rely on Tailwind utility widths to make the card scale across screen sizes. */}
      <div className="bg-gray-800 flex flex-col gap-5 p-5 w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 rounded-lg">
        <h1 className="text-center text-2xl font-bold">Password Generator</h1>

        {/* Output row: input grows to fill space, button stays compact. Using flex and min-w-0 prevents overflow on small screens. */}
        <div className="flex items-center w-full justify-center">
          <input
            type="text"
            readOnly
            className="flex-1 min-w-0 w-full px-3 py-2 bg-gray-900 text-white rounded-l border-0 focus:outline-0"
            value={password}
            ref={passwordRef}
          />
          <button
            className="px-3 py-2 flex-shrink-0 rounded-r cursor-pointer bg-blue-500 font-semibold hover:bg-blue-500/90 active:bg-blue-500"
            onClick={copyPassword}
          >
            copy
          </button>
        </div>

        {/* Controls area: use responsive layout. On small screens we'll stack filters vertically; on md+ we show them inline to save vertical space. */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Length control: keep as a flexible item so the range can expand on larger screens */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="flex-1"
            />
            <label className="whitespace-nowrap">Length: {length}</label>
          </div>

          {/* Checkbox group: we wrap checkboxes so they naturally wrap on small screens. */}
          <div className="flex items-center gap-4 flex-wrap">
            <label className="flex items-center gap-2">
              <input
                checked={number}
                type="checkbox"
                onChange={() => setNumber((prev) => !prev)}
                className="w-4 h-4"
              />
              <span>Numbers</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                checked={character}
                type="checkbox"
                onChange={() => setCharacter((prev) => !prev)}
                className="w-4 h-4"
              />
              <span>Characters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomPassGenerator;
