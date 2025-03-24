import { useEffect } from "react";
import { useState } from "react";

export default function MoveElement() {
    const [position,setPosition] = useState({
        x:0,
        y:0
    })
    const[canMove,SetCanMove] = useState(true);
    const handleMove =(e) => {
        if(canMove){
            setPosition({
                x:e.clientX,
                y:e.clientY,
            })
        }
    }
    useEffect(() => {
        window.addEventListener('pointermove',handleMove);

        return () => window.removeEventListener('pointermove',handleMove);
        
    },[])
  return (
    <div>
      <label>
        <input type="checkbox"
        checked={canMove}
        onChange={(e) => SetCanMove(e.target.checked)}
        />
        The dot is allowed to move
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </div>
  );
}