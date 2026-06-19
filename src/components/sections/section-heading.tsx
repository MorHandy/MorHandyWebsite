export function SectionHeading({
  eyebrow,
  title,
  copy,
  centered = true,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-[72ch] text-center" : "max-w-[72ch]"}>
      <p className="text-sm font-black text-rust">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className={centered ? "mx-auto mt-4 max-w-[68ch] text-base leading-8 text-slate sm:text-lg" : "mt-4 max-w-[68ch] text-base leading-8 text-slate sm:text-lg"}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
