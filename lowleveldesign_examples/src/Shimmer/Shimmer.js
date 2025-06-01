const Shimmer = () => {
  return Array(20)
    .fill(0)
    .map(() => (
      <div
        style={{
          padding: 10,
          margin: 20,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "black",
        }}
      >
        <div
          style={{ backgroundColor: "lightgrey", width: 280, height: 280 }}
        ></div>
      </div>
    ));
};
export default Shimmer;
