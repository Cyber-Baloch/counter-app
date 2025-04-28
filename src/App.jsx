import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col items-center space-y-6 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-800">Counter App</h1>
          <p className="text-6xl font-extrabold text-blue-600 transition-all duration-300">{count}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all duration-300"
            >
              Increase
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-all duration-300"
            >
              Decrease
            </button>
            <button
              onClick={() => setCount(0)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full transition-all duration-300"
            >
              Reset
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
