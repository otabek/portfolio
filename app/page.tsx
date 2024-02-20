import Image from "next/image";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SkillCard from "@/components/ui/SkillCard";
import { skillData } from "@/components/icons/logos";
import experienceData from "@/lib/data/experience.json";

export default function AboutPage() {
  return (
    <main>
      <section>
        <Container>
          <div className="flex flex-col gap-6 md:items-center lg:flex-row lg:items-stretch">
            <Card className="md:w-1/2 lg:w-[unset]">
              <div className="relative h-[300px] w-full lg:h-full lg:w-[330px]">
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
              <h1 className="mb-[30px] pt-6 text-center text-5xl font-extrabold uppercase md:pl-0 lg:pl-6 lg:text-start lg:text-6xl">
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
          <div className="mt-6 flex flex-col gap-6 sm:flex-row">
            <Card className="flex flex-col gap-4 sm:w-1/2">
              <h3 className="text-lg uppercase">Experience</h3>
              <div className="flex flex-col gap-5">
                {experienceData.map(({ company, date, position }) => (
                  <div key={company} className="flex flex-col gap-2">
                    <h3>{position}</h3>
                    <p className="text-sm text-gray-200">{company}</p>
                    <p className="text-sm text-gray-200">{date}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="flex flex-col gap-4 sm:w-1/2">
              <h3 className="text-lg uppercase">Skills</h3>
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
