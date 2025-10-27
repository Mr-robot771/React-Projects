const features = [
  { title: "Reliable and Safe", desc: "We ensure safety and reliability for all transport services.", icon: "🛡️" },
  { title: "Wide Network", desc: "Our extensive network covers all major cities and regions in Nepal.", icon: "🗺️" },
  { title: "Easy Booking", desc: "Book your transport with just a few clicks, anytime, anywhere.", icon: "🧾" },
  { title: "24/7 Support", desc: "Our support team is available 24/7 to assist you.", icon: "⏰" },
];

export default function WhyChoose() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-3">Why Choose TransNepal?</h2>
      <p className="text-gray-600 mb-10">
        Experience the difference with our commitment to quality service.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-xl w-64 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
