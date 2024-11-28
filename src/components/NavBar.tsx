import { useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const NavBar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center jusitfy-between p-4">
          <div className="flex items-center gap-7">
            <img src="img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClassName="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
