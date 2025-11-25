import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { StatusBadge } from "./StatusBadge";

interface ActionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  status: "easy" | "medium" | "hard";
  href?: string;
  onClick?: () => void;
}

export function ActionCard({
  icon,
  title,
  description,
  status,
  href = "#",
  onClick,
}: ActionCardProps) {
  const content = (
    <div className="cursor-pointer h-full flex flex-col">
      <div className="flex items-start gap-4 flex-1">
        <div className="flex-shrink-0 text-white pt-1">{icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="heading-sm mb-3 text-xl">{title}</h3>
          <StatusBadge status={status} className="mb-4" />
          <p className="body-sm text-foreground/75">{description}</p>
        </div>
      </div>
    </div>
  );

  if (onClick) {
    return (
      <div onClick={onClick} className="action-card">
        {content}
      </div>
    );
  }

  return (
    <Link to={href} className="action-card block h-full">
      {content}
    </Link>
  );
}
