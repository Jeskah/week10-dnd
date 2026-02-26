import { useDroppable } from "@dnd-kit/core";

export default function Bin() {
  const { setNodeRef, isOver } = useDroppable({ id: "bin" });

  return (
    <div ref={setNodeRef} className={`bin ${isOver ? "bin-over" : ""}`}>
      🗑️
    </div>
  );
}