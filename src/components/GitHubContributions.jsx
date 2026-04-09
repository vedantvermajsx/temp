import GitHubCalendar from "react-github-calendar";

const GitHubContributions = () => {
  return (
    <div className="page flex items-center justify-center py-16 px-4">
      <div className="shadow-xl rounded-2xl p-6 sm:p-8 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-500 mb-6 text-center">
          GitHub Contributions
        </h2>
        <div className="flex items-center justify-center overflow-x-auto no-scrollbar">
          <GitHubCalendar
            username="vedantvermajsx"
            blockSize={12}
            blockMargin={4}
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            colorScheme="dark"
            fontSize={12}
            style={{
              color: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubContributions;
