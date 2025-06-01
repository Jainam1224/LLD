export const MemeCard = ({ data }) => {
  const { url, author } = data;

  return (
    <div
      style={{
        padding: 10,
        margin: 20,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
      }}
    >
      <img width={280} height={280} alt="meme" src={url} />
      <p>{author}</p>
    </div>
  );
};
