import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <h1 className="text-5xl font-bold">Bienvenidos a Craniocomercio</h1>
      <Image
        src="/cranio.png"
        alt="Craniocomercio logo"
        width={300}
        height={500}
      />
      <Button>Clikea aca</Button>

    </main>
  );
}
