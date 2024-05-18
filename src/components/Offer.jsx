/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Offer() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-[#ffda79] px-6 py-[120px] text-center">
      <div className="font-sourceSerife text-[40px] font-normal leading-[48px] md:max-w-[600px] md:text-[64px] md:leading-[72px]">
        <h2>Find your next designer today</h2>
      </div>
      <div className="text-xl leading-9 md:max-w-[620px]">
        <p>
          The world's leading brands use Dribbble to hire creaticve talent.
          Browse miliions of top-rated portofolios to fing your perfect creative
          match
        </p>
      </div>
      <div className="flex items-center justify-center gap-[16px] *:inline-block *:rounded-full *:px-5 *:py-4">
        <Link
          href={
            "https://dribbble.com/signup/new?return_to_after_signup=%2Fget-started%3Fintention%3Dhire%23hiringWorkType"
          }
          className="bg-slate-900 text-white"
        >
          Get started now
        </Link>
        <Link
          href={"https://dribbble.com/hiring"}
          className="bg-white text-slate-900"
        >
          Learn about hiring
        </Link>
      </div>
      <div className="text-xl leading-9">
        <p>
          Are you a designer ?{" "}
          <Link href={"https://dribbble.com/signup/new"} className="underline">
            Join Dribbble
          </Link>
        </p>
      </div>
    </div>
  );
}
