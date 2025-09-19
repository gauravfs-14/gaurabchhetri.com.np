import { Metadata } from "next";


export const metadata: Metadata = {
    title: "CSV to LaTeX | Minitools | Gaurab Chhetri",
    description: "CSV to LaTeX is a tool that converts csv files to latex tables.",
    openGraph: {
      title: "CSV to LaTeX | Minitools | Gaurab Chhetri",
      description: "CSV to LaTeX is a tool that converts csv files to latex tables.",
      images: "/csv-tex-og.png",
    },
};

export default function CSVToLatexLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container max-w-4xl mx-auto">
      {children}
    </div>
  );
}
