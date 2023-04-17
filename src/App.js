import NavBar from "./components/NavBar";
import { redirect, BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Contact,
  Footer,
  Portfolio,
  About,
  Resume,
  Header,
} from "./components";

import images from "./assets";

const projectArray = [
  {
    title: "Weather Dashboard",
    description:
      "Deployed website that interacts with OpenWeather API to allow users to view a 5-day forecast based on city.",
    img: images.wd,
    link: "https://reethd.github.io/Weather-Dashboard/",
    repo: "https://github.com/reethd/Weather-Dashboard",
    selected: false,
  },
  {
    title: "Social Network API",
    description:
      "Database built with MongoDB to simulate a social network site complete with users, comments, replies and friends.",
    img: images.sn,
    link: "",
    repo: "https://github.com/reethd/Social-Network-API",
    selected: false,
  },
  {
    title: "Everybody Eats",
    description:
      "Deployed website that interacts with TheMealDb API to randomly generate a meal, along with a video link to its recipe, based on user input such as category of food or region of origin.",
    img: images.ee,
    link: "https://kpfranklin22.github.io/Everybody-Eats/",
    repo: "https://github.com/Kpfranklin22/Everybody-Eats",
    selected: false,
  },
  {
    title: "Readme Generator",
    description:
      "Node app that uses the inquirer package to organize and format user input into a professional README.md file",
    img: images.rg,
    link: "",
    repo: "https://github.com/reethd/README-generator",
    selected: false,
  },
  {
    title: "Employee Tracker",
    description:
      "Node app that allows a user to interact with a MySQL database to organize, edit and delete employees, their roles, departments, salaries, etc.",
    img: images.et,
    link: "",
    repo: "https://github.com/reethd/Employee-Tracker",
    selected: false,
  },
  {
    title: "Digital DIY Bulletin Board",
    description:
      "Deployed website that uses MySQL to create a database that authorized users may then update with upcoming events.",
    img: images.ddbb,
    link: "https://digital-diy-bulletin-board.herokuapp.com/",
    repo: "https://github.com/Kpfranklin22/digital-diy-bulletin-board",
    selected: false,
  },
  {
    title: "Free School",
    description: "Deployed website to be used as a schedule with RSVP functionality for Athens Free School. Allows Teachers and students to sign up for and create classes and to get an idea for who will be there with contact info.",
    img: images.fs,
    link: "https://free-school-706.herokuapp.com/",
    repo: "https://github.com/reethd/free-school",
    selected: false,
  }
];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/my-portfolio" element={<About />} />
        <Route
          path="/portfolio"
          element={<Portfolio projectArray={projectArray} />}
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
