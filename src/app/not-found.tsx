import { Button } from "@/components/ui/button";
import { InView } from "@/components/ui/in-view";
import { Home } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto px-8 pb-10 max-w-3xl">
        <InView
            variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
        >
        <div className="flex flex-col items-center justify-center h-[70vh]">
            <h1 className="text-3xl font-bold mb-4 text-center">404 - Page Not Found</h1>
            <p className="text-muted-foreground text-center mb-14 text-sm max-w-[70%] mx-auto">
                The page you are looking for does not exist.
            </p>
            <Button variant="default" className="text-sm" asChild>
                    <Link href="/"> <Home className="inline ml-2 w-4 h-4" /> Go to Home</Link>
                </Button>
            </div>
        </InView>
    </main>
  );
}

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
  openGraph: {
    title: "404 - Page Not Found",
    description: "The page you are looking for does not exist.",
  },
}