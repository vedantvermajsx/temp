import ProjectCard from "./ProjectCard.jsx";
import { Projects } from "../data/index.js";

function Project() {
  return (
    <section
      id="projects"
      className="page min-h-screen px-4 sm:px-8 lg:px-16 py-16"
    >
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-slate-200 mb-12 tracking-tight">
        Featured Projects
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {Projects.map((ele) => (
          <ProjectCard
            key={ele.id}
            id={ele.id}
            name={ele.name}
            image={ele.image}
            info={ele.info}
            stars={ele.stars}
            tools={ele.tools}
            forward={ele.forward}
            git={ele.git}
          />
        ))}
      </div>
    </section>
  );
}

export default Project;
