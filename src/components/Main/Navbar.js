import { useContext, useEffect, useState } from "react";
import UserContext from "../../utils/UserContext";

const strings = [
  "Midhun Kalarikkal",
  "Midhun K Paniker",
  "Software Engineer",
  "Web Developer",
];

const Navbar = () => {
  const { userName, setUserName } = useContext(UserContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = (prevCount + 1) % strings.length;
        setUserName(strings[newCount]);
        return newCount;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar bg-gray-300">
      <h1 className="text-black font-bold text-xl">
        A Sample React Project {userName}
      </h1>
    </nav>
  );
};

export default Navbar;
