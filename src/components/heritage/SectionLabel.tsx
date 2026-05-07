export function SectionLabel({ hi, en }: { hi: string; en: string }) {
  return (
    <div className="flex flex-col items-center text-center mb-14 md:mb-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="h-px w-10 bg-gold/60" />
        <span className="font-body text-[0.7rem] tracking-royal uppercase text-gold">{en}</span>
        <span className="h-px w-10 bg-gold/60" />
      </div>
      <h2 className="font-hindi text-3xl md:text-5xl lg:text-6xl font-light text-stone leading-tight max-w-4xl text-balance">
        {hi}
      </h2>
    </div>
  );
}
