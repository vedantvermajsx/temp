import ProjectCard from "./ProjectCard.jsx";
import { useState, useEffect } from "react";



function Project() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    const _ = async () => {

      const response = await fetch('https://raw.githubusercontent.com/vedantvermajsx/data/refs/heads/master/project.json');
      const data = await response.text();
      const projectsData = await JSON.parse(data);
      setProjects(projectsData);

      setLoading(false);
    }
    _();
  }, [])


  return (
    loading ? <div className="page flex justify-center items-center h-screen">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-slate-200">Loading...</h1>
      </div>
    </div> :
      <section
        id="projects"
        className="page min-h-screen px-4 sm:px-8 lg:px-16 py-16"
      >
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-slate-200 mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 animate-gradient-x" style={{ fontFamily: "stylish" }}>
          Featured Projects
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((ele) => (
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
