import MarqueeCard from "./MarqueeCard";
import male1 from "../../public/male1.jpg";
import male2 from "../../public/male2.jpg";
import male3 from "../../public/male3.jpg";
import male4 from "../../public/male4.jpg";
import male5 from "../../public/male5.jpg";
import male6 from "../../public/male6.jpg";
import female1 from "../../public/female1.jpg";
import female2 from "../../public/female2.jpg";
import female3 from "../../public/female3.jpg";
import female4 from "../../public/female4.jpg";
import female5 from "../../public/female5.jpg";
import female6 from "../../public/female6.jpg";

const marqueeData = [
  {
    nama: "John Doe",
    pekerjaan: "UI Designer",
    keahlian: ["UI", "UX", "Ilustrator"],
    gambar: male1,
  },
  {
    nama: "Jane Smith",
    pekerjaan: "UX Designer",
    keahlian: ["UI", "UX", "Web"],
    gambar: female1,
  },
  {
    nama: "Mike Johnson",
    pekerjaan: "Illustrator",
    keahlian: ["Ilustrator", "Brand", "Product"],
    gambar: male2,
  },
  {
    nama: "Sarah Williams",
    pekerjaan: "Web Designer",
    keahlian: ["UI", "Web", "Grapich Design"],
    gambar: female2,
  },
  {
    nama: "Alex Brown",
    pekerjaan: "Mobile Designer",
    keahlian: ["UI", "UX", "Mobile"],
    gambar: male3,
  },
  {
    nama: "Emily Davis",
    pekerjaan: "Animation Designer",
    keahlian: ["UI", "Animation", "Product"],
    gambar: female3,
  },
  {
    nama: "Chris Wilson",
    pekerjaan: "Product Designer",
    keahlian: ["UX", "Product", "Web"],
    gambar: male4,
  },
  {
    nama: "Olivia Taylor",
    pekerjaan: "Graphic Designer",
    keahlian: ["UI", "Grapich Design", "Ilustrator"],
    gambar: female4,
  },
  {
    nama: "Daniel Martinez",
    pekerjaan: "UI Designer",
    keahlian: ["UI", "UX", "Web"],
    gambar: male5,
  },
  {
    nama: "Sophia Anderson",
    pekerjaan: "UX Designer",
    keahlian: ["UI", "UX", "Ilustrator"],
    gambar: female5,
  },
  {
    nama: "Matthew Thomas",
    pekerjaan: "Web Designer",
    keahlian: ["UI", "Web", "Mobile"],
    gambar: male6,
  },
  {
    nama: "Ava Garcia",
    pekerjaan: "Mobile Designer",
    keahlian: ["UI", "UX", "Mobile"],
    gambar: female6,
  },
];

export default function Marquee() {
  return (
    <div className="flex items-center overflow-hidden whitespace-nowrap py-[72px]">
      <div>
        <div
          id="marquee__container"
          className="grid w-[calc((218px*12)+(24px*12))] animate-marquee grid-cols-12 items-center whitespace-nowrap bg-repeat lg:w-[calc((273px*12)+(40px*12))]"
        >
          {marqueeData.map((item) => {
            return (
              <MarqueeCard
                imagesSource={item.gambar}
                key={item.nama}
                nama={item.nama}
                pekerjaan={item.pekerjaan}
                keahlian={item.keahlian}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div
          id="marquee__container"
          className="grid w-[calc((218px*12)+(24px*12))] animate-marquee grid-cols-12 items-center whitespace-nowrap bg-repeat lg:w-[calc((273px*12)+(40px*12))]"
        >
          {marqueeData.map((item) => {
            return (
              <MarqueeCard
                imagesSource={item.gambar}
                key={item.nama}
                nama={item.nama}
                pekerjaan={item.pekerjaan}
                keahlian={item.keahlian}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
