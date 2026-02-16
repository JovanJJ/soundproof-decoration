import BlogHero from "../components/BlogHero";
import BlogMainSection from "../components/BlogMainSection";
import { fetchBlogList } from "@/lib/actions";
import MessageWidget from "../components/MessageWidget";

export const metadata = {
  title: "Soundproof Craetions - Blog",
  description: "Read practical guides and tips on soundproofing, room acoustics, noise control, and improving sound quality in homes and workspaces.",
};

export default async function BlogPage() {

  const data = await fetchBlogList();


  return (
    <>
      <BlogHero data={data} />
      <BlogMainSection data={data} />
      <MessageWidget />
    </>
  );
}