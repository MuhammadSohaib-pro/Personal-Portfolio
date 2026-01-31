import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectContainer = ({ project }) => (
  <div className="bg-border overflow-hidden shadow rounded-xl p-px transition-all duration-300 ease-in-out">
    {project.image && (
      <img
        src={project.image}
        className="rounded-t-xl w-full object-cover"
        alt={`${project.name} screenshot`}
        style={{ height: "300px" }}
      />
    )}
    <Card className="bg-card/90 w-full rounded-t-none gap-3 py-3  border-none transition-all duration-300 ease-in-out backdrop-blur-[20px]">
      <CardHeader className={"gap-0"}>
        <CardTitle
          className={"text-2xl text-center text-ring dark:text-foreground"}
        >
          {project.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-4 ">{project.description}</p>
        {project.stack && (
          <ul className="flex flex-wrap h-20 gap-2 justify-center py-3">
            {project.stack.map((item) => (
              <li key={uniqid()} className="text-sm font-semibold">
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-4 justify-center">
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label="source code"
              className="link hover:text-primary text-foreground font-medium lowercase relative"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          )}

          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label="live preview"
              className="link hover:text-primary text-foreground font-medium lowercase relative"
              target="_blank"
            >
              <LaunchIcon />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ProjectContainer;
