import { useDroppable, useDraggable } from "@dnd-kit/core";

function SandwichLayer({ item, index }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `layer-${index}`,
    data: { index },
  });

  const style = {
    position: "absolute",
    left: "50%",
    bottom: `${index * 55 + 80}px`,
    transform: transform
      ? `translate(-50%, 0) translate(${transform.x}px, ${transform.y}px)`
      : "translate(-50%, 0)",
    touchAction: "none",
    cursor: "grab",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="sandwich-layer"
    >
      <img
        src={item.img}
        alt={item.name}
        className="ingredient-img"
        draggable={false}
      />
      <img src={item.img} alt={item.name} className="ingredient-img" draggable={false} />
    </div>
  );
}

export default function Stack({ items }) {
  const { setNodeRef, isOver } = useDroppable({
    id: "drop-zone",
  });

  return (
    <div>
      <h4>Drag and drop your filling below</h4>

      <div ref={setNodeRef} className={`drop-zone ${isOver ? "drop-zone--over" : ""}`}>
        <h6>DROP ZONE</h6>

        {items.map((item, index) => (
          <SandwichLayer key={`${item.id}-${index}`} item={item} index={index} />
        ))}

        <img
          className="plate-img"
          src="https://www.pngmart.com/files/8/Plate-Transparent-PNG-1.png"
          alt="Plate"
          draggable={false}
        />
      </div>
    </div>
  );
}
     <div
  ref={setNodeRef}
  className={`drop-zone ${isOver ? "drop-zone--over" : ""}`}
>
        <h6>DROP ZONE</h6>

        {items.map((item, index) => (
          <SandwichLayer
            key={`${item.id}-${index}`} // stable-ish even if repeated ingredients
            item={item}
            index={index}
          />
        ))}

        <img
  className="plate-img"
  src="https://www.pngmart.com/files/8/Plate-Transparent-PNG-1.png"
  alt="Plate"
  draggable={false}
/>
      </div>
    </div>
  );
}


// RANDOM LINE TO DELETED
