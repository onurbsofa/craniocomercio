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
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/imagen1.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <h2 className="text-2xl font-bold">Productos</h2>
            <p className="text-lg">Productos de alta calidad</p>
            <Button>Ver productos</Button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/imagen2.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <h2 className="text-2xl font-bold">Contacto</h2>
            <p className="text-lg">Contactanos para mas informacion</p>
            <Button>Contactanos</Button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/imagen3.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <h2 className="text-2xl font-bold">Contacto</h2>
            <p className="text-lg">Contactanos para mas informacion</p>
            <Button>Contactanos</Button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/imagen4.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <h2 className="text-2xl font-bold">Contacto</h2>
            <p className="text-lg">Contactanos para mas informacion</p>
            <Button>Contactanos</Button>
          </div>
      </div>
    </main>
  );
}
