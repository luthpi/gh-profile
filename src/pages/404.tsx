const NotFound = () => {
  return (
    <div className="flex h-[90vh] w-[100vw] flex-col items-center justify-center gap-3 text-center text-white md:flex-row">
      <span className="border-b-[2px] pb-2 text-6xl md:border-b-0 md:border-r-[2px] md:pb-0 md:pr-4">
        404{" "}
      </span>
      <span className="text-xl">Page Not Found</span>
    </div>
  );
};

export default NotFound;
