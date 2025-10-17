import Image from "next/image";
import visionImage from "@/assets/images/vision.jpg";

export default () => {
  return (
    <section className="bg-primary">
      <div className="grid mx-auto px-4">
        <div>
          <Image src={visionImage} alt="vision" width={500} height={500} />
        </div>
        <div>
          <h2>Our Vision</h2>
          <p></p>
        </div>
      </div>
    </section>
  );
};
