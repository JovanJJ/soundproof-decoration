import Hero from "./components/Hero";
import Main from "../app/components/Main";
import MessageWidget from "./components/MessageWidget";

export const metadata = {
  title: "Soundproof Creations",
  description: "Soundproof Creations helps improve room acoustics with decorative soundproof panels, curtains, and practical noise-reduction solutions for modern spaces.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Main />
      <MessageWidget />
    </>
  );
}
