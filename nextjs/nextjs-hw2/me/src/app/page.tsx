// pages/index.js

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4"> {/* bg-black eklendi */}
      <h1 className="text-4xl font-bold text-center mb-4 text-white"> {/* text-white eklendi */}
        Hello! My name is Nurullah, but you can call me Nuri.
      </h1>
      <p className="text-lg text-center mb-6 text-white"> {/* text-white eklendi */}
        I graduated from ITU MTAL highschool and am currently studying
        Textile Engineering at ITU. I took coding classes in high school and
        I wish to pursue a career as a software developer.
      </p>

      <h2 className="text-2xl font-semibold text-center mb-4 text-white"> {/* text-white eklendi */}
        Welcome to My Portfolio
      </h2>
      <Link legacyBehavior href={"/projects"}>
        <a className="text-blue-500 text-lg font-medium underline">
          Check out my projects
        </a>
      </Link>
    </div>
  );
}