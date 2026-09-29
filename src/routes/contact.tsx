import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Awdahir" },
      {
        name: "description",
        content: "Get in touch with Awdahir — questions, feedback and collaborations.",
      },
      { property: "og:title", content: "Contact — Awdahir" },
      {
        property: "og:description",
        content: "Get in touch with Awdahir — questions, feedback and collaborations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <Contact />;
}
