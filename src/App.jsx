import { useState } from "react";
import Stack from "./components/Stack";
import Ingredient from "./components/Ingredient";
import "./App.css";
import Bin from "./components/Bin";
import { DndContext} from "@dnd-kit/core";


export default function App() {
  const [stackItems, setStackItems] = useState([]);

  const ingredientList = [
    { id: 1, name: "Bread", img: "/src/assets/Bread.png" },
    { id: 2, name: "Lettuce", img: "/src/assets/Lettuce.png" },
    { id: 3, name: "Cheese", img: "/src/assets/Cheese.png" },
    { id: 4, name: "Bacon", img: "/src/assets/Bacon.png" },
    { id: 5, name: "Tomato", img: "/src/assets/Tomato.png" },
    { id: 6, name: "Egg", img: "/src/assets/Egg.png" },
    { id: 7, name: "Ham", img: "/src/assets/Ham.png" },
    { id: 8, name: "Mayo", img: "/src/assets/Mayo.png" },
    { id: 9, name: "Cucumber", img: "/src/assets/Cucumber.png" },
    { id: 10, name: "Avocado", img: "/src/assets/Avocado.png" },
  ];

 function handleDragEnd({ active, over }) {
  if (!over) return;

 
  if (over.id === "drop-zone") {
    const draggedItem = ingredientList.find((item) => item.id === active.id);
    if (draggedItem) setStackItems((prev) => [...prev, draggedItem]);
  }

  
  if (over.id === "bin") {
    const index = active.data?.current?.index;
    if (index !== undefined) {
      setStackItems((prev) => prev.filter((_, i) => i !== index));
    }
  }
}

export default function App() {
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div>
        <h1>BUILD YOUR SANDWICH</h1>
      </div>

      <div className="sandwich-app">
        <div className="ingredients">
          {ingredientList.map((item) => (
            <Ingredient key={item.id} id={item.id} name={item.name} img={item.img} />
          ))}
        </div>

        <div className="sandwich-stack">
          <Stack items={stackItems} />
        </div>

        <Bin />
      </div>
    </DndContext>
  );
}