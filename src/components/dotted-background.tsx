import type React from "react";

interface DottedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  dotSize?: number;
  dotSpacing?: number;
  dotColor?: string;
  opacity?: number;
  fade?: boolean;
}

export function DottedBackground({
  children,
  className,
  dotSize = 1,
  dotSpacing = 20,
  dotColor = "rgb(0, 0, 0)",
  opacity = 0.2,
  fade = false,
}: DottedBackgroundProps) {
  const dotPattern = `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`;

  return (
    <div
      className={` ${className || ""}`}
      style={{
        backgroundImage: dotPattern,
        backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
        backgroundPosition: "0 0",
        opacity: opacity,
      }}
    >
      {fade && (
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
      )}
      {children && (
        <div className="relative z-10" style={{ opacity: 1 }}>
          {children}
        </div>
      )}
    </div>
  );
}
