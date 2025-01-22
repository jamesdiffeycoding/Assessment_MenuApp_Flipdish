import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header />
      <br />
      <Menu />
      <br />
      <Footer />
    </div>
  );
}
