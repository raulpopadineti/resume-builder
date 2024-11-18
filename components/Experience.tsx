interface ExperienceProps {
  title: string;
  period: string;
  bullets: string[];
}

export function Experience({
  title,
  period,
  bullets,
  variant = "bullets",
}: ExperienceProps & { variant?: "bullets" | "paragraph" }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-sm font-medium text-muted-foreground">{period}</p>
      {variant === "bullets" ? (
        <ul className="text-sm list-dash pl-3">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm">{bullets.join(" ")}</p>
      )}
    </div>
  );
}
