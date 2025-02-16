import { cn } from "@/lib/utils"

export function Footer() {
  return (
    <footer
      className={cn(
        "flex flex-col items-center justify-center w-full h-24 border-t",
        "bg-background text-black"
      )}
    >
      <img src="cranio.png" alt="" />
    </footer>
  );
}