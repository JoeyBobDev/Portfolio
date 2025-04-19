import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Safe Sight",
    description: 
      "Utilizes computer vision and Hugging Face models to detect workplace hazards, analyze near-misses, and send real-time alerts to improve safety compliance.",
    image: "/projects/project1.png",
    tags: ["Edge Ai", "Docker", "React", "FastAPI"],
    demoUrl: "#",
    githubUrl: "https://github.com/JoeyBobDev/SafeSight",
  },
  {
    id: 2,
    title: "RTX AST Project",
    description:
      "Awarded 2nd place in the 24-25 CSU CS Innovation Expo for this machine learning data processing tool. Runs fully locally, enjoy a video demo below.",
    image: "/projects/project2.png",
    tags: ["Auto Classification", "Deep Learning"],
    demoUrl: "https://www.youtube.com/watch?v=9-c0zTYUFcQ",
  },
  {
    id: 3,
    title: "Ultimate Gorilla Draft",
    description:
      "ChatGPT powered classifying app, draft a team of celebrities into squads using wikipedia backed retrieval features and sentiment analysis.",
    image: "/projects/project3.png",
    tags: ["RAG", "LLM", "pandas", "tkinter"],
    demoUrl: "#",
    githubUrl: "https://github.com/JoeyBobDev/GorillaOps",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of my recent projects, thoughtfully designed with a strong focus on detail, refined problem solving, and user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/JoeyBobDev"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
