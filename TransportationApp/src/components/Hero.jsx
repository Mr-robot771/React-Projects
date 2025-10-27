export default function Hero() {
  return (
    <section
      className="h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
      style={{ backgroundImage: "url('./img.png')" }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-3 ">
        Connecting Nepal through Transport
      </h1>
      <p className="text-lg mb-6">
        Your trusted partner for seamless transportation and logistics across Nepal.
      </p>

      <div className="flex bg-white rounded-full shadow-lg overflow-hidden w-3/4 md:w-1/2">
        <input
          type="text"
          placeholder="Where to? / From / To / Date"
          className="flex-grow p-3 text-gray-700 outline-none"
        />
        <button className="bg-blue-600 px-6 text-white font-semibold">Search</button>
      </div>
    </section>
  );
}

