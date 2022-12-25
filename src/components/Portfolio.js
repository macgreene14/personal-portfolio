import Card from "./Card";
import "../assets/css/Background.css";

function Portfolio() {
  return (
    <div className="bg">
      <div
        className=" flex flex-wrap justify-evenly"
        style={{ height: "100vh" }}
      >
        <Card
          href="https://rplace1.herokuapp.com/"
          imgSrc="https://user-images.githubusercontent.com/33014789/208559822-9bf65a07-a275-441a-8a4e-1e76e4b6db9b.png"
          title="Rplace"
          content="A social media site with a customizable profile page where users can post music, videos, and other embedded pages."
        />
        <Card
          href="https://macgreene14.github.io/weather-dashboard/"
          imgSrc={require("../assets/img/weather-dashboard.png")}
          title="Weather Dashboard"
          content="A minimalist dashboard for viewing current weather in a selected city. Current and 5-day forecated are rendered to view."
        />
        <Card
          href="https://mysterious-river-44284.herokuapp.com/"
          imgSrc="https://user-images.githubusercontent.com/33014789/191653439-900435a8-8a09-4ed9-8ee9-ad132c5f4f23.png"
          title="Notetaker"
          content="A simple application which allows users to add, edit, and delete notes. Data is persisted using local storage."
        />
        <Card
          href="https://tech-blog-mgreene.herokuapp.com/"
          imgSrc={require("../assets/img/tech-blog.png")}
          title="Blog"
          content="A blog which allows users to view blog posts from a feed. Upon signing in, users may create their own blog posts to be posted to the shared feed."
        />
      </div>
    </div>
  );
}

export default Portfolio;
