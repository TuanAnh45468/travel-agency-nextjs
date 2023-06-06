export const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-mint-green rounded-md text-blackish-green font-semi-bold ${className}`}
    >
      {children}
    </button>
  );
};
