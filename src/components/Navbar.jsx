import { motion } from "framer-motion";

export const Navbar = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
   
      <div className={`fixed top-0 right-0 flex text-gray-200 items-center p-7 w-full gap-80`}>
        <label className="text-2xl font-bold cursor-pointer font-sans">
        <label className="uppercase text-emerald-400">N</label><label className="hover:text-emerald-400 transition-colors mr-32">our</label>
        </label>
        <div className="flex-1 flex items-end justify-center gap-10 ">
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-sm font-bold cursor-pointer uppercase ml-5 hover:text-emerald-400 transition-colors"
    >
      {label}
    </button>
  );
};
