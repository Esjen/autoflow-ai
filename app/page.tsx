import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="flex h-[80vh] items-center justify-center">
        <h1 className="text-5xl font-bold">
          Welcome to AutoFlow AI
        </h1>
      </section>
    </main>
  );
}