import { useDroppable } from "@dnd-kit/core";

export default function Stack({ items }) {
        const { setNodeRef } = useDroppable({
            id: "drop-zone",
        });

    return (
<div>
    <div
        ref={setNodeRef}> 

    <h4>Drag and drop your filling below</h4>
                
    <div className="drop-zone">
    <h6>DROP ZONE</h6>

                {items.map((item, index) => (
            <div key={index}>
                <span>{item.emoji}</span>{item.name}
                </div>
))}
            
            </div>

            
        </div>
    </div>
    )
    }