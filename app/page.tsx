import Card from "@/components/icons/ui/Card";
import Container from "@/components/icons/ui/Container";
import Image from "next/image";
import experienceData from "@/lib/data/experience.json";
import { skillData } from "@/components/icons/logos";
import SkillCard from "@/components/icons/ui/SkillCard";

export default function AboutPage() {
  return (
    <main>
      <section>
        <Container>
          <div className="flex gap-6">
            <Card>
              <div className="relative w-[372px]">
                <Image
                  src="/img/Profile.jpeg"
                  alt="Profile image"
                  fill
                  priority
                  className="rounded-lg object-cover"
                />
              </div>
            </Card>
            <div className="w-full">
              <h1 className="mb-[30px] pl-6 pt-6 text-6xl font-extrabold uppercase">
                Software Engineer
              </h1>
              <Card className="flex-col gap-6">
                <h2 className="text-4xl font-semibold">Otabek Narzullaev</h2>
                <p className="text-base">
                  Experienced frontend developer with a strong background in
                  React.js, JavaScript and TypeScript. Proficient in developing
                  responsive and interactive user interfaces, and proficient at
                  integrating complex backend systems. Skilled in full-stack
                  development, with a comprehensive understanding of backend
                  technologies such as Node.js and Express. Proven ability to
                  collaborate with cross-functional teams to deliver
                  high-quality products.
                </p>
              </Card>
            </div>
          </div>
          <div className="mt-6 flex gap-6">
            <Card className="flex w-1/2 flex-col gap-4">
              <h3 className="text-lg uppercase">Experience</h3>
              <div className="flex flex-col gap-5">
                {experienceData.map(({ company, date, position }) => (
                  <div key={company} className="flex flex-col gap-2">
                    <h3>{position}</h3>
                    <p className="text-gray-200 text-sm">{company}</p>
                    <p className="text-gray-200 text-sm">{date}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="flex w-1/2 flex-col gap-4">
              <h3 className="uppercase">Skills</h3>
              <div className="flex flex-wrap content-start items-start gap-4 self-stretch">
                {skillData.map(({ title, icon }) => (
                  <SkillCard key={title} title={title} icon={icon} />
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
