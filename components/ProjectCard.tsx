interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="bg-gray-100 p-5 rounded shadow">
      <h3 className="text-x1 font-bold mb-2">
        {title}
      </h3>

      <p className="mb-3">
        {description}
      </p>

      <p className="text-sm">
        <strong>Technologies:</strong>{" "}
        {technologies.join(", ")}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Project
        </a>
      )}
    </article>
  );
}