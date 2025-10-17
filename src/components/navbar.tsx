import Image from "next/image";
import logo from "@/assets/images/full-logo.png";

export default () => {
  return (
    <div className="flex sticky justify-between py-3 px-12 bg-purple-300 mt-3 mx-3 rounded-[100px] items-center">
      <Image src={logo} alt="logo" height={50} />
      <div>
        <a href="#">Sign Up</a>
        <a href="#">Login</a>
      </div>
    </div>
  );
};
