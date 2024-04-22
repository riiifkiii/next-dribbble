import Link from "next/link";

export default function Hero() {
  return (
    <div id="hero">
      <div className="flex flex-col items-center justify-center px-[24px] pt-[80px] text-center lg:px-[32px]">
        <div className="animate-colorLop rounded-full px-[16px] py-[10px] font-medium">
          <Link href={"https://dribbble.com/signup/new"}>
            Over 3 million ready-to-work creatives!
          </Link>
        </div>
        <h1 className="font-sourceSerife mb-[24px] mt-[40px] max-w-[500px] text-[48px] leading-[56px] lg:max-w-[800px] lg:text-[72px] lg:leading-[76px]">
          The world’s destination for design
        </h1>
        <p className="text-[18px] font-medium leading-8 lg:text-[20px]">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </p>
        <Link
          href={"https://dribbble.com/signup/new"}
          className="mt-[32px] rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-700 lg:font-semibold"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
