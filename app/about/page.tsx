import SkillCard from "@/components/SkillCard";

export default function About() {
    return (
        <main className="max-w-5xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">
                About Me
            </h2>

            <p className="mb-6">
                I enjoy learning web development and building applications with React and Next.js.
            </p>

            <SkillCard
                title="Technical Skills"
                skills={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Next.js",
                    "TypeScript",
                ]}
            />
        </main>
    );
}