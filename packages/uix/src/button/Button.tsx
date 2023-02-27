import "./button.css";

export interface ButtonProps {
  children: React.ReactNode;
}
export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: "#70b42b",
        color: "#fff",
        border: "2px solid #ae68da",
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
