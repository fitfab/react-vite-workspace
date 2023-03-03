import "./button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export const Button = ({
  children,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
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
    >
      {children}
    </button>
  );
};
