import { useState } from "react";
import "./App.css";
import data from "./data";
import Item from "./Item";

const allCategory = ["all", ...new Set(data.map((el) => el.category))];

function App() {
  const [menu, setMenu] = useState(data);

  const filterItems = (itemCategory) => {
    if (itemCategory === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === itemCategory);
    setMenu(newItems);
  };

  return (
    <div className="w-full h-auto">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center w-full gap-14">
          <h1 className="w-full text-4xl font-extrabold text-center text-gray-600 font-primary ">
            Our Menu
          </h1>
          <div className="flex items-center justify-center gap-2">
            {allCategory.map((el, id) => (
              <button
                className="px-3 py-2 text-xs font-semibold tracking-wide capitalize rounded sm:text-md hover:bg-secondary hover:text-white text-secondary"
                key={id}
                onClick={() => filterItems(el)}
              >
                {el}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center w-full py-10 gap-28">
            {menu.map((el) => {
              return <Item item={el} key={el.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
