import { DndContext } from '@dnd-kit/core'
import Ingredient from './components/Ingredient'

const ingredients = [
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

export default function App() {
  return (
    <DndContext>
      <div>
        <h1>Sandwich Maker 🥪</h1>
        {ingredients.map(ingredient => (
          <Ingredient
            key={ingredient.id}
            id={ingredient.id}
            name={ingredient.name}
            emoji={ingredient.emoji}
          />
        ))}
      </div>
    </DndContext>
  )
}