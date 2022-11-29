function AboutMe() {
  return (
    <>
      <section>
        <h1 className="m-4 text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
          About Me
        </h1>
        <p className="m-8 text-xl leading-12 text-gray-600 sm:text-center">
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
    </>
  );
}

export default AboutMe;
