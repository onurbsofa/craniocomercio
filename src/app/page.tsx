import Image from "next/image";
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card } from "@/components/card"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl">Tienda de productos</p>
      </div>
      <div className="grid gap-16 pb-12 justify-around md:grid-cols-2">
        <Card img="/imagen1.png" nproducto="Pantalones" precio="500$"/>
        <Card img="/imagen2.png" nproducto="Vestido" precio="1000$"/>
        <Card img="/imagen3.png" nproducto="Malla" precio="12.00$"/>
        <Card img="/imagen4.png" nproducto="Camisa" precio="10.00$"/>
      </div>
    </main>
  );
}
