import Card from "./Card";

function Portfolio() {
  return (
    <div className="my-4 flex flex-wrap justify-evenly">
      <Card
        href="https://github.com/macgreene14/novelty-book-swap"
        imgSrc="https://raw.githubusercontent.com/VaishaliQA/Novelty_Project/main/public/assets/img/novelty-browse.png"
        title="Novelty"
        content="A peer-to-peer book sharing application which enables users to connect and share personal books"
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
  );
}

export default Portfolio;
