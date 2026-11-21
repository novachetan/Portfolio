import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article
      className="project-card-item h-full group flex flex-col bg-[#0e0e0e] border border-[#1e1e1e] hover:border-brand-red/60 hover:shadow-[0_0_25px_rgba(229,9,32,0.12)] transition-all duration-500 rounded-sm overflow-hidden will-change-transform"
      data-purpose="project-card"
    >
      {/* Screenshot Preview */}
      <div className="relative w-full aspect-video overflow-hidden bg-black border-b border-[#1e1e1e]">
        <img
          alt={project.imageAlt}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          src={project.image}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Card Info */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div className="flex items-start justify-between gap-3">
          <div className="overflow-hidden">
            <span className="project-num block font-display text-3xl sm:text-4xl text-brand-red font-bold leading-none select-none will-change-transform">
              {project.id}
            </span>
          </div>
          <div className="flex-grow">
            <h3 className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider group-hover:text-brand-red transition-colors duration-300">
              {project.title}
            </h3>
            <p className="font-mono text-[9px] sm:text-[10px] text-brand-grayMuted uppercase tracking-widest mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <span
            className="text-gray-500 group-hover:text-brand-red group-hover:translate-x-1.5 transition-all duration-300 text-sm shrink-0"
            aria-hidden="true"
          >
            ➔
          </span>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-4 pt-3 border-t border-[#1a1a1a] flex flex-wrap gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-mono text-gray-400">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="project-tag px-2 py-0.5 bg-[#161616] rounded border border-[#222222] group-hover:border-[#333333] transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
