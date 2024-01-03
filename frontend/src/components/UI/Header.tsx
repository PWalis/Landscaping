import { type FC } from "react";
import Button from "./Button";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex flex-row justify-between">
      <h1 className="md:pl-10 text-6xl">{title}</h1>
      <nav className="p-3 md:mr-10">
        <li className="list-none">
          <Button onClick={() => console.log("click")}>Gallery</Button>
        </li>
      </nav>
    </header>
  );
};

export default Header;
