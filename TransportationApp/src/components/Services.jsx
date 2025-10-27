const services = [
  { title: "Bus Booking", desc: "Book your bus tickets with ease and comfort.", img: "https://cdn-icons-png.flaticon.com/512/854/854894.png" },
  { title: "Cab Service", desc: "Get a cab anytime, anywhere in Nepal.", img: "https://cdn-icons-png.flaticon.com/512/743/743007.png" },
  { title: "Cargo Delivery", desc: "Reliable and efficient cargo delivery services.", img: "https://cdn-icons-png.flaticon.com/512/619/619034.png" },
];

export default function Services() {
  return (
    <section className="py-16 text-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-3">Our Services</h2>
      <p className="text-gray-600 mb-10">Discover the range of services we offer to meet your transportation needs.</p>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md w-72 hover:shadow-lg transition">
            <img src={s.img} alt={s.title} className="w-20 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
