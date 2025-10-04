import Link from "next/link";

interface StyledButtonProps {
  label: string;
  onClick?: () => void;
  navigateTo?: string;
  className?: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  label,
  onClick,
  className = "",
  navigateTo,
}) => {
  const baseClasses = `px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 text-white font-semibold shadow-lg transition-all duration-300 ease-in-out 
    hover:from-blue-600 hover:via-green-400 hover:to-green-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 text-lg ${className}`;

  if (navigateTo) {
    return (
      <Link href={navigateTo} className={baseClasses}>
        {label}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={baseClasses}>
      {label}
    </button>
  );
};

export default StyledButton;
