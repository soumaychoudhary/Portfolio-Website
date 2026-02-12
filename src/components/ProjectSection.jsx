import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id : 1,
    title : "Complete Bazaar",
    description : "Complete Bazaar is an online market place which brought custmer and seller in one platform.",
    image : "/projects/bazaar.png",
    tags: ["React","TailwindCSS","Express.js","Node.js","MongoDB"],
    demoUrl : "#",
    githubUrl : "#",
  },
  {
    id : 2,
    title : "Student query desk",
    description : "Student Query Desk is an online platform which helps student and teachers to resolve there queries .",
    image : "/projects/studentquery.png",
    tags: ["React","TailwindCSS","Express.js","Node.js","MongoDB"],
    demoUrl : "#",
    githubUrl : "#",
  },
  {
    id : 3,
    title : "Blog App",
    description : "Blog App is an online platform that allows users to post blogs and gives likes and comments to others blogs .",
    image : "/projects/blog.png",
    tags: ["React","TailwindCSS","Express.js","Node.js","MongoDB"],
    demoUrl : "#",
    githubUrl : "https://github.com/soumaychoudhary/Blog-App",
  },
]

export const ProjectSection = ()=>{
  return( 
    <section id="projects" className="py-24 px-4 relative">

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here ae some of my recent projects. Each projects was carefully
          crafted with attention to details, performance, and user experience .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project,key)=>(
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover"
            >

              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag)=>(
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ">
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
            href="https://github.com/soumaychoudhary"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

      </div>

    </section>
  );
}