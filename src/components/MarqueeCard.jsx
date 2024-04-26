import Image from "next/image";

export default function MarqueeCard({
  imagesSource,
  nama,
  pekerjaan,
  keahlian,
}) {
  return (
    <div
      id="marquee__card"
      className="relative mx-3 h-[272px] w-[218px] overflow-hidden rounded-[30px] lg:mx-5 lg:h-[340px] lg:w-[273px]"
    >
      <Image
        src={imagesSource}
        alt={nama}
        width={273}
        height={340}
        className="object-cover object-top"
      />
      <div className="absolute bottom-5 left-5 text-white">
        <div className="text-sm font-semibold">
          <h3>{nama}</h3>
          <h3>{pekerjaan}</h3>
        </div>
        <div className="mt-2 flex items-center gap-2" id="keahlian">
          {keahlian.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white px-3 py-1 text-xs font-semibold last:hidden lg:last:block"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
