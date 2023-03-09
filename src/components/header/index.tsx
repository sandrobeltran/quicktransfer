import Link from "next/link";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Header = (): JSX.Element => {
  const { asPath, back } = useRouter();
  const inHome = asPath === "/";

  return (
    <header className="z-50 w-full h-16 sticky top-0 left-0 shadow-lg shadow-violet-500/50">
      <nav className="flex justify-between items-center sticky w-full h-full bg-violet-600 px-8">
        <div className="flex items-center gap-4">
          {!inHome ? (
            <div
              onClick={() => back()}
              className="cursor-pointer hover:scale-125 transition-transform"
            >
              <BiArrowBack size={24} color={"#F7F7F7"} />
            </div>
          ) : null}
          <Link href={"/"} className="text-2xl text-white font-bold">
            Quick Transfer
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
