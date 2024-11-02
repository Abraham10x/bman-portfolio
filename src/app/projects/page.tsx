const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hashtag Digital",
      body: "ebsite UI/UX tRedesign",
      bg: "/assets/projects/hashtag.png",
      link: "",
    },
    {
      id: 2,
      title: "Partycoo",
      body: "Product Design UI/UX",
      bg: "/assets/projects/partycoo.png",
      link: "",
    },
    {
      id: 3,
      title: "Swarovski",
      body: "Project Designs",
      bg: "/assets/projects/swarovski.png",
      link: "",
    },
    {
      id: 4,
      title: "Montblanc",
      body: "Project Designs",
      bg: "/assets/projects/montblanc.png",
      link: "",
    },
    {
      id: 5,
      title: "Polo Limited",
      body: "Project Designs",
      bg: "/assets/projects/polo.png",
      link: "",
    },
    {
      id: 6,
      title: "Polo Avenue",
      body: "Project Designs",
      bg: "/assets/projects/polo-avenue.png",
      link: "",
    },
    {
      id: 7,
      title: "Branding",
      body: "Digital Branding and Prints",
      bg: "/assets/projects/branding.png",
      link: "",
    },
    {
      id: 8,
      title: "Logos",
      body: "Company Logo Design",
      bg: "/assets/projects/logo.png",
      link: "",
    },
  ];

  return (
    <div className="container pt-10 sm:pt-14 px-5 sm:px-10 pb-8 mx-auto">
      <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl">Projects</h3>
      <div className="my-20 grid grid-cols-1 sm:grid-cols-2 gap-20">
        {projects.map((item) => (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.bg})` }}
            className="flex flex-col items-center justify-end h-[31rem] bg-cover rounded-2xl shadow-yellow-200 shadow-lg pt-8 pb-32"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 items-center">
                <p className="font-bold text-xl sm:text-2xl lg:text-4xl text-primary">
                  {item.title}
                </p>
                <p className="text-white text-xl">{item.body}</p>
              </div>
              <button className="rounded-lg border border-primary px-4 py-2 text-xl uppercase font-medium text-white">
                view project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
