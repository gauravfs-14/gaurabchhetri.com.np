import DevLogsList from "@/components/dev-logs-list"; 

export default async function Page() {
  return (
    <div className="container max-w-3xl mx-auto px-4 pb-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Dev Logs</h1>
      <p className="text-muted-foreground text-center mb-14 text-sm max-w-[70%] mx-auto">
        Welcome to my dev logs! Here, I share my thoughts, experiences, and insights
        on various topics. Feel free to explore and engage with the content.
      </p>
      <DevLogsList />
    </div>
  );
}
