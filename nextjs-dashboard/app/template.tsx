import FooterBtn from "./ui/footer-btn";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <FooterBtn />
    </div>
  );
}
