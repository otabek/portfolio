import Link from "next/link";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { Icons } from "@/components/icons";

const contactData = [
  {
    icon: <Icons.telegram />,
    address: "@otabek_n",
    title: "Telegram",
    href: "https://t.me/otabek_n",
  },
  {
    icon: <Icons.email />,
    address: "narzulla3v@gmail.com",
    title: "Email",
    href: "mailto:narzulla3v@gmail.com",
  },
  {
    icon: <Icons.github />,
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
                <p className="text-sm text-gray-100 lg:text-base">{title}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
