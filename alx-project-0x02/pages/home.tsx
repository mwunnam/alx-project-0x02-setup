import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold">Home Page</h2>
        <Card 
          title="Getting Stated"
          content="Leaning about the use of NextJs in a special way"
        />

      </main>
    </>
  );
}

