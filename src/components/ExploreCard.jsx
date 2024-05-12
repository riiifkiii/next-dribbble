import Image from "next/image";
import {
  IoBookmarkOutline,
  IoHeartOutline,
  IoEye,
  IoHeart,
} from "react-icons/io5";
import exampleImages from "../../public/explore/original-03f8f865be1214350fb8fcad907ed338.jpg";
import Link from "next/link";

export default function ExploreCard({
  imageSource,
  title,
  profile,
  likes,
  see,
}) {
  return (
    <div>
      <div className="relative">
        <div>
          <Image
            src={exampleImages}
            alt="title"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div
          id="title__container"
          className="absolute bottom-0 left-0 flex h-fit w-full items-center justify-between bg-gradient-to-b from-transparent to-slate-800/80 px-5 py-5 opacity-0 transition-opacity duration-300 hover:opacity-100"
        >
          <div id="title" className="font-semibold text-white">
            <h2>
              <Link href={"/"}>{String(title).substring(0, 15)}...</Link>
            </h2>
          </div>
          <div
            id="action"
            className="flex items-center gap-2 *:rounded-full *:bg-white *:p-3"
          >
            <Link href={"/"} className="hover:text-slate-500">
              <IoBookmarkOutline />
            </Link>
            <Link href={"/"} className="hover:text-slate-500">
              <IoHeartOutline />
            </Link>
          </div>
        </div>
      </div>
      <div
        id="detail"
        className="flex items-center justify-between py-2 text-sm"
      >
        <div id="profile" className="flex items-center gap-1 text-slate-800">
          <div className="aspect-square w-6 rounded-full bg-slate-500"></div>
          <h3>{profile}</h3>
        </div>
        <div
          id="statistic"
          className="flex items-center gap-2 *:flex *:items-center *:gap-1 *:text-slate-500"
        >
          <div>
            <button>
              <IoHeart className="hover:text-pink-500" />
            </button>
            <span>{likes}</span>
          </div>
          <div>
            <button className="pointer-events-none">
              <IoEye />
            </button>
            <span>{see}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
