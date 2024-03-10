import Image from "next/image";
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card } from "@/components/card"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <h1 className="text-5xl font-bold">Bienvenidos a Craniocomercio</h1>
      <Card />
    </main>
  );
}
