import ProfileCard from "@/components/profile-card";
import { InView } from "@/components/ui/in-view";

export default function Home() {
  return (
    <main className="container mx-auto px-8 py-10 max-w-3xl">
      <InView
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
      >
        <ProfileCard />
      </InView>
      <div className="mt-14" />
      <div>
        <p className="text-lg text-muted-foreground">
          Hello World <span className="text-xl">👋</span>, I specialize in
          building things for the web. Currently, I am an Undergraduate Research
          Assistant at the Texas State University, where I combine my skills in
          full-stack development with academic research to build innovative
          tools and applications.
        </p>
      </div>
      <div className="mt-14" />
    </main>
  );
}
