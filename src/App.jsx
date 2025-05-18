import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative">
      <Navbar />

      {[1, 2, 3, 4, 5].map((i) => (
        <section
          key={i}
          id={`section${i}`}
          className="h-screen flex items-center justify-center text-4xl font-bold bg-gray-100 odd:bg-white"
        >
          Sectionnn {i}
        </section>
      ))}
    </div>
  );
};

export default App;