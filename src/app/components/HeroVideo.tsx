import Youtube from "react-youtube";

export default function HeroVideo() {
  const options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return <Youtube videoId="FMCuL8Zh5xk" />;
}
