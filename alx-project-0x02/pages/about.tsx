import Header from "@/components/layout/Header";
import Button from "@/components/common/Button"
export default function About() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p className="mt-2 text-gray-600">We Learning On going</p>
        <Button label="Click Me" size="large" shape="rounded-md" />
      </main>
    </>
  );
}
