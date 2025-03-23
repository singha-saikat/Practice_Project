export default function Parent() {
    const handleChildClick = (message) => {
      console.log(`Message from child: ${message}`);
    };
  
    return <Child onClick={handleChildClick} />;
  }
  
  function Child({ onClick }) {
    const handleClick = () => {
      onClick("Hello from Child!"); // Call the callback with a message
    };
  
    return <button onClick={handleClick}>Click Me</button>;
  }