import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p6">
        <h2 className="text-2xl font-semibold">Welcome to the Home Page</h2>
        <p className="mt-2 text-gray-600">This is the main landing page for my App</p>
      </main>
    </>
  );
}
