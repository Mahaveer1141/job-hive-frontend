import Hero from "@/components/home/hero";
import Navbar from "@/components/navbar";
import Vision from "@/components/home/vision";
import Feature from "@/components/home/feature";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Vision />
      <Feature />
      <Footer />
    </div>
  );
}
