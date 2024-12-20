const Lazy = () => {
  return (
    <div className="bg-blue-200 rounded-lg p-4">
      <h3 className="text-xl font-semibold text-blue-800">
        Hello, this is a lazy-loaded component!
      </h3>
      <p className="text-blue-600">
        You are seeing this content after lazy loading!
      </p>
    </div>
  );
};

export default Lazy;
