import React from "react";

interface Props {
  size?: "sm" | "md" | "lg";
  block?: boolean;
  style?: "primary";
  className?: string;
  [x: string]: any;
}

const Button: React.FC<Props> = ({
  size = "md",
  style = "primary",
  block,
  className,
  children,
  ...rest
}) => {
  const sizes = {
    sm: "px-4 py-1.5",
    md: "px-5 py-2.5",
    lg: "px-6 py-3",
  };

  const styles = {
    primary: "bg-black text-white hover:bg-orange border-2 border-transparent",
  };

  return (
    <button
      {...rest}
      className={[
        "rounded-xl text-center transition focus-visible:ring-2 ring-offset-2 ring-orange",
        block && "w-full",
        sizes[size],
        styles[style],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
