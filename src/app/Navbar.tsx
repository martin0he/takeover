import Link from "next/link";
import { FaHome, FaInfoCircle, FaEnvelope, FaCalendar } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";

const Navbar: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-100">
      <nav className="absolute left-[20px] top-1/2 -translate-y-1/2 h-fit p-9 w-20 bg-transparent backdrop-blur-md border-2 border-dashed border-blue-900 shadow-lg flex flex-col items-center justify-center z-50 rounded-full pointer-events-auto hover:border-solid transition-all duration-500 ease-in-out hover:transform hover:scale-101">
        <div className="flex flex-col space-y-8 items-center">
          <Link
            href="/"
            className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaHome size={28} />
            <span className="mt-2 text-xs">Home</span>
          </Link>
          <Link
            href="/calendar"
            className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaCalendar size={28} />
            <span className="mt-2 text-xs">Calendar</span>
          </Link>
          <Link
            href="/todo"
            className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaCheckToSlot size={28} />
            <span className="mt-2 text-xs">ToDo</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
