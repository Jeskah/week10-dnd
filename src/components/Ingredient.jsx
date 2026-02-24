import { useDraggable } from '@dnd-kit/core'

export default function Ingredient({ id, name, img }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  })

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="ingredient-card"
    >
      <img src={img} alt={name} className="ingredient-img" />
      <span className="ingredient-name">{name}</span>
    </div>
  )
}