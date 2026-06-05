import { tools } from "../data/index.js";
import ToolItem from "./ToolItem.jsx";

function Tools() {
  const toolSet = [...tools, ...tools, ...tools];

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-10 select-none overflow-hidden py-4">
      <div className="relative flex overflow-hidden">
        <div className="slider flex items-center whitespace-nowrap">
          {toolSet.map((tool, index) => (
            <ToolItem
              key={`row1-${index}-${tool[0]}`}
              name={tool[0]}
              icon={tool[1]}
            />
          ))}
          {toolSet.map((tool, index) => (
            <ToolItem
              key={`row1-dup-${index}-${tool[0]}`}
              name={tool[0]}
              icon={tool[1]}
            />
          ))}
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="slider2 flex items-center whitespace-nowrap">
          {toolSet.map((tool, index) => (
            <ToolItem
              key={`row2-${index}-${tool[0]}`}
              name={tool[0]}
              icon={tool[1]}
            />
          ))}
          {toolSet.map((tool, index) => (
            <ToolItem
              key={`row2-dup-${index}-${tool[0]}`}
              name={tool[0]}
              icon={tool[1]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tools;
