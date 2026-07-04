interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <section className="bg-blue-100 rounded p-5 shadow">
      <h3 className="font-bold text-xl mb-3">
        {title}
      </h3>

      <ul className="list-disc pl-5">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}