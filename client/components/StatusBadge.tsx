interface StatusBadgeProps {
  status: "easy" | "medium" | "hard";
  className?: string;
}

const statusConfig = {
  easy: {
    text: "EASY",
    textColor: "#9BCF88",
    borderColor: "#5C9672",
    bgColor: "rgba(155, 207, 136, 0.26)",
  },
  medium: {
    text: "MEDIUM",
    textColor: "#CFBD88",
    borderColor: "#968C5C",
    bgColor: "rgba(207, 193, 136, 0.26)",
  },
  hard: {
    text: "HARD",
    textColor: "#CF8888",
    borderColor: "#965C5C",
    bgColor: "rgba(150, 92, 92, 0.26)",
  },
};

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <div
      style={{
        borderColor: config.borderColor,
        backgroundColor: config.bgColor,
      }}
      className={`inline-flex items-center justify-center px-4 py-2 rounded-full border text-sm font-medium ${className}`}
    >
      <span style={{ color: config.textColor }} className="font-gt-walsheim tracking-widest">
        {config.text}
      </span>
    </div>
  );
}
