import "../assets/css/AboutMe.css";
function AboutMe() {
  return (
    <div
    // style={{
    //   backgroundImage:
    //     "url('https://static01.nyt.com/images/2021/01/26/sports/26snowboard-kianaclay/merlin_182648193_87add28a-6b69-407b-9d3b-0a4f39bd75b6-superJumbo.jpg?quality=75&auto=webp')",
    // }}
    >
      <section className="bg">
        <h1 className="m-4 text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
          About Me
        </h1>
        <p className="m-8 text-xl leading-12 text-black-600 sm:text-center">
          Mac Greene is an aspiring web developer based out of Nashville, TN. He
          received a B.S. in Engineering from Fort Lewis College in Durango,
          Colorado. Since graduating, Mac has worked as a project engineering
          for Nextracker; a leading providing of utility racking systems.
        </p>
        <img
          src={require("../assets/img/headshot.jpeg")}
          alt="Mac Greene Headshot"
          style={{ height: "250px" }}
          className="mx-auto max-w-lg h-auto rounded-lg"
        />
      </section>
    </div>
  );
}

export default AboutMe;
