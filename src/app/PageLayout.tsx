import Navbar from "./Navbar";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-transparent mt-10">
        <h1 className="text-5xl font-bold text-center">{title}</h1>
      </header>
      <main className="flex-grow p-6">{children}</main>
      <footer className="bg-gray-200 text-center p-4 mt-auto">
        <p className="text-sm text-gray-600 font-inter">
          &copy; 2025 Takeover. All rights reserved.
        </p>
      </footer>
      <Navbar />
    </div>
  );
};

export default PageLayout;
