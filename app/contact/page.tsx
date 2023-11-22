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
        <div className="flex gap-8">
          {contactData.map(({ address, href, icon, title }) => (
            <Link
              key={address}
              href={href}
              target="_blank"
              className="flex flex-1"
            >
              <Card className="flex h-[433px] flex-1 flex-col items-center justify-center gap-4 pb-[100px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-[24px] border border-solid  border-white">
                  {icon}
                </div>
                <h3 className="text-2xl">{address}</h3>
                <p className="text-gray-100">{title}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
