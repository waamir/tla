import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf6]">
      <Image
        src="/homepage.png"
        alt="The Learning Atelier"
        width={1536}
        height={2048}
        priority
        sizes="100vw"
        className="h-auto w-full"
      />
    </main>
  );
}
