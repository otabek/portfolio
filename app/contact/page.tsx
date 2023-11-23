import Email from "@/components/icons/Email";
import Github from "@/components/icons/Github";
import Telegram from "@/components/icons/Telegram";
import Card from "@/components/icons/ui/Card";
import Container from "@/components/icons/ui/Container";
import Link from "next/link";

const contactData = [
  {
    icon: <Telegram />,
    address: "@otabek_n",
    title: "Telegram",
    href: "https://t.me/otabek_n",
  },
  {
    icon: <Email />,
    address: "narzulla3v@gmail.com",
    title: "Email",
    href: "mailto:narzulla3v@gmail.com",
  },
  {
    icon: <Github />,
    address: "otabek",
    title: "GitHub",
    href: "https://github.com/otabek",
  },
];

export default function ContactPage() {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-8 md:flex-row">
          {contactData.map(({ address, href, icon, title }) => (
            <Link
              key={address}
              href={href}
              target="_blank"
              className="flex flex-1 transition-transform duration-300 hover:scale-105"
            >
              <Card className="flex flex-1 flex-col items-center justify-center gap-4 md:px-8 md:py-24 lg:h-[433px] lg:p-6 lg:pb-[100px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-[24px] border border-solid  border-white">
                  {icon}
                </div>
                <h3 className="text-base lg:text-2xl">{address}</h3>
                <p className="text-gray-100 text-sm lg:text-base">{title}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
