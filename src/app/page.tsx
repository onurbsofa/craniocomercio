import Image from "next/image";
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card } from "@/components/card"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
      <div className="flex items-center justify-center h-96 w-full bg-fixed bg-parallax">
        <h1 className="text-6xl font-bold text-white">CranioCom</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl">Tienda de productos</p>
      </div>
      <div className="grid gap-16 pb-12 justify-around md:grid-cols-2">
        <Card img="/imagen1.png" />
        <Card img="/imagen2.png" />
        <Card img="/imagen3.png" />
        <Card img="/imagen4.png" />
      </div>
    </main>
  );
}
