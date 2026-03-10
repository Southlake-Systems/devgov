import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({ children, variant = "primary" }: Props) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-xl font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-purple-700 hover:bg-purple-500 shadow-[0_0_25px_rgba(124,58,237,0.6)]",
        variant === "secondary" &&
          "border border-white/20 hover:bg-white/10"
      )}
    >
      {children}
    </button>
  );
}