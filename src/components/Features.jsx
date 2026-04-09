import { useState, useEffect } from "react";
import { features } from "../data/index.js";
import { Loader } from "lucide-react";
import Card from "./Card.jsx";

function Features() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([import("../data/index.js")]).then(() => setIsLoaded(true));
  }, []);

  if (!isLoaded)
    return (
      <div className="page flex items-center justify-center">
        <Loader className="text-red-500 animate-spin w-8 h-8" />
      </div>
    );

  return (
    <section id="about" className="page px-4 sm:px-8 lg:px-16 py-16">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-slate-200 mb-12 tracking-tight">
        What I Bring to the Table
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {features.map((feature) => (
          <Card
            key={feature[0]}
            title={feature[1]}
            para={feature[2]}
            id={feature[0]}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
