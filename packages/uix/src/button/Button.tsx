import './button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}
export const Button = ({ children, primary = true }: ButtonProps) => {
  const bar = 'foo';
  const bgColor = primary ? 'orange' : '#70b42b';
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: '#fff',
        border: '2px solid #ae68da',
        borderRadius: '.5rem',
        padding: '.5rem 1rem',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
