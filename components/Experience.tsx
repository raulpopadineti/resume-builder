interface ExperienceProps {
  title: string;
  period: string;
  bullets: string[];
}

export function Experience({ title, period, bullets }: ExperienceProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-sm font-medium text-muted-foreground">{period}</p>
      <div className="text-sm">
        {bullets.map((bullet, index) => (
          <p key={index}>{bullet}</p>
        ))}
      </div>
      {/* <ul className="text-sm list-dash pl-3">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul> */}
    </div>
  );
}
