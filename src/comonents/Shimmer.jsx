const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: 12}, (_, index) => (
        <div key={index} className="m-2 flex w-72 flex-col gap-4 p-2">
          <div className="skeleton aspect-video w-full rounded-lg" />
          <div className="skeleton h-4 w-28" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-3/4" />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
