import React from "react";

export interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  className = "",
  onClick,
  type = "button"
}) => {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md inline-flex items-center justify-center";
  const variants: Record<string, string> = {
    primary: "bg-orange-600 hover:bg-orange-700 text-white",
    secondary: "bg-orange-500 hover:bg-orange-600 text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
