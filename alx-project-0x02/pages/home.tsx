import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold">Home Page</h2>
        <p className="mt-2 text-gray-600">Landing page</p>
      </main>
    </>
  );
}

