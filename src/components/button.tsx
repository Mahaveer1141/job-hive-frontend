type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  as?: "button" | "a";
  className?: string;
};

export default ({
  children,
  href,
  disabled,
  onClick,
  as,
  className
}: ButtonProps) => {
  const commonClassName =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 transition-all duration-150 rounded-md text-base px-8 py-3";
  return (
    <>
      {as === "button" ? (
        <button
          disabled={disabled}
          onClick={onClick}
          className={`${className} ${commonClassName}`}
        >
          {children}
        </button>
      ) : (
        <a href={href} className={`${className} ${commonClassName}`}>
          {children}
        </a>
      )}
    </>
  );
};
