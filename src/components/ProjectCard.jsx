 import React from "react";
import { Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const isPlaceholder = (url) => !url || url === "#";

  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`status ${
            project.status === "In Progress" ? "status-progress" : ""
          }`}
        >
          {project.status}
        </span>
      </div>

      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="tag-list" aria-label="Technologies used">
        {project.tech.map((tech) => (
          <span className="tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        {isPlaceholder(project.github) ? (
          <span className="muted-link" title="Add your repository URL">
            <Github size={16} /> GitHub link needed
          </span>
        ) : (
          <a href={project.github} target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub <ArrowUpRight size={14} />
          </a>
        )}

        {isPlaceholder(project.demo) ? (
          <span className="muted-link" title="Add your live project URL">
            Live demo not added
          </span>
        ) : (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live demo <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
