import { useDroppable, useDraggable } from '@dnd-kit/core'

function SandwichLayer({ item, index }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `layer-${index}`,
    data: { index }
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
      className="sandwich-layer"
    >
      <span>{item.emoji}</span>
      <span>{item.name}</span>
    </div>
  )
}

export default function Stack({ items }) {
  const { setNodeRef } = useDroppable({
    id: 'drop-zone',
  })

  return (
    <div>
      <h4>Drag and drop your filling below</h4>
      <div ref={setNodeRef} className="drop-zone">
        <h6>DROP ZONE</h6>
        {items.map((item, index) => (
          <SandwichLayer key={index} item={item} index={index} />
        ))}
        <img src="https://www.pngmart.com/files/8/Plate-Transparent-PNG-1.png"/>
      </div>
    </div>
  )
}