import { Navbar } from "../nav";

export function LayoutPublic({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
