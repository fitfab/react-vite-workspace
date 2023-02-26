import "./button.css";

export interface ButtonProps {
  children: React.ReactNode;
}
export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: "#cf9",
        border: "4px solid #ae68da",
        borderRadius: ".5rem",
        padding: ".5rem 1rem",
        cursor: "pointer",
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
