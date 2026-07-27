import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Spacer to allow scrolling and testing animations */}
      <div className="h-[150vh] bg-paper flex items-center justify-center border-t border-line/30">
        <p className="text-graphite/50 font-mono text-sm max-w-sm text-center">
          (Role para baixo para ver a animação de saída dos elementos da área Hero, conforme planejado)
        </p>
      </div>
    </>
  );
}
