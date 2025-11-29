import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Counter | Minitools | Gaurab Chhetri",
  description:
    "Word Counter is a tool that counts the number of words in a text.",
  openGraph: {
    title: "Word Counter | Minitools | Gaurab Chhetri",
    description:
      "Word Counter is a tool that counts the number of words in a text.",
    images: "/word-counter-og.png",
  },
};

export default function WordCounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container max-w-4xl mx-auto">{children}</div>;
}
