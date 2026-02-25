import Image from "next/image";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <Header />
      <main className="flex min-h-screen max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

      </main>
    </div>
  );
}
