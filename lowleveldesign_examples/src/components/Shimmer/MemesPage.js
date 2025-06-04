import React, { useEffect, useState } from "react";
import { MemeCard } from "./MemeCard";
import Shimmer from "./Shimmer";

const MemesPage = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // this will be called when component is destroying
  }, []);

  const handleScroll = () => {
    // scrollY - how much I have scrolled
    // innerHeight - heigh of the window(visible setion)
    // document.body.scrollHeight - total height of the web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();

    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {memes.map((meme, i) => (
        <MemeCard key={i} data={meme} />
      ))}

      {showShimmer && <Shimmer />}
    </div>
  );
};

export default MemesPage;
