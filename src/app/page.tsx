import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Vision from "@/components/vision";
import Feature from "@/components/feature";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Vision />
      <Feature />
      <Footer />
    </div>
  );
}
