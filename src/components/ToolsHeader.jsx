const ToolsHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center pb-12 px-4 select-none" style={{ fontFamily: "stylish" }}>
      <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 animate-gradient-x">
          The Mindset, The Skills
        </span>
      </h2>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
        <span className="relative text-slate-400 font-light text-xl sm:text-2xl tracking-wide italic">
          <span className="text-blue-500 font-serif mr-1" style={{ fontFamily: "stylish", fontSize: "2rem" }}>&ldquo;</span>
          You&apos;re looking for
          <span className="text-blue-500 font-serif ml-1">&rdquo;</span>
        </span>
      </div>
    </div>
  );
};

export default ToolsHeader;
