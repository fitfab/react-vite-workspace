import './button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}
export const Button = ({ children, primary = false, ...rest }: ButtonProps) => {
  const bgColor = primary ? 'rgb(255, 221, 53)' : '#e18be7';
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: '#000000',
        border: '2px solid #b41dd6',
        borderRadius: '.5rem',
        padding: '.5rem 1rem',
        cursor: 'pointer',
        letterSpacing: '0.05rem',
        textTransform: 'uppercase',
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
