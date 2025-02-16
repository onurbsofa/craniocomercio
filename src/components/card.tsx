interface CardProps {
    img: string;
    nproducto: string;
        precio: string;
  }

 export function Card({img,nproducto,precio}: CardProps) {
   return (
 
        <div className="w-full max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={img} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{nproducto}</h5>
                </a>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{precio}</span>
                     <a href="#" className="text-white bg-black p-2 rounded-md">Add to cart</a>
                </div>
            </div>
        </div>

   );
 }