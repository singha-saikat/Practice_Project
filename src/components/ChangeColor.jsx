/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef, useRef } from "react";

export default function ChangeColor() {
    const buttonRef = useRef(null);
    const changeColor = () => {
        buttonRef.current.style.backgroundColor = "lightblue";
      };
    

  return (
    <div>
      <CustomButton ref={buttonRef}>Click Me</CustomButton>
      <button className='btn'  onClick={changeColor}>Change Button Color</button>
    </div>
  );
}


// Child Component
const CustomButton = forwardRef((props, ref) => {
    return (
      <button ref={ref} style={{ padding: "10px 20px", fontSize: "16px" }}>
        {props.children}
      </button>
    );
  });
  