import { Header } from "../../components";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <main className="px-4 py-5">{children}</main>
    </div>
  );
};
