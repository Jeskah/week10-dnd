import { useState } from 'react'
import Stack from './components/Stack'
import Ingredient from './components/Ingredient'
import './App.css'
import { DndContext } from "@dnd-kit/core";
import Bin from './components/Bin';

export default function App() {
const [stackItems, setStackItems] = useState([]);

const ingredientList = [
  { id: 1, name: "Bread", emoji: "🍞" },
  { id: 2, name: "Lettuce", emoji: "🥬" },
  { id: 3, name: "Cheese", emoji: "🧀" },
  { id: 4, name: "Bacon", emoji: "🥓" },
  { id: 5, name: "Tomato", emoji: "🍅" },
  { id: 6, name: "Egg", emoji: "🍳" },
  { id: 7, name: "Ham", emoji: "🍖" },
  { id: 8, name: "Mayo", emoji: "🫙" },
  { id: 9, name: "Cucumber", emoji: "🥒" },
  { id: 10, name: "Avocado", emoji: "🥑" },
]

   function handleDragEnd(event) {
  const { active, over } = event
  console.log('active:', active)
  console.log('over:', over)

  if (over && over.id === 'drop-zone') {
    const draggedItem = ingredientList.find(
      (item) => item.id === active.id
    )
    if (draggedItem) {
      setStackItems((prev) => [...prev, draggedItem])
    }
  }

  if (over && over.id === 'bin') {
    const layerIndex = active.data.current.index
    setStackItems((prev) => prev.filter((_, i) => i !== layerIndex))
  }
}


return (

    <DndContext onDragEnd={handleDragEnd}>

    <div><h1>BUILD YOUR SANDWICH</h1></div>

    <div className='sandwich-app'>

        <div className='ingredients'>
        { ingredientList.map((item) => (
        <Ingredient 
        key={item.id}
        id={item.id}
        name={item.name}
        emoji={item.emoji}
        />
        ))}
        </div>

        <div className='sandwich-stack'>
        <Stack items={stackItems}/>
        </div>
        <Bin/>
    </div>
    </DndContext>
);
}
