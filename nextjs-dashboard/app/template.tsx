import Footer from "./ui/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
