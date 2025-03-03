import { useState } from "react";

export default function Pannel({ title, children }) {
  const [isShow, setIsshow] = useState(false);

  return (
    <section className="panel">
      <h3 className="font-semibold">{title}</h3>
      
      {isShow ? (
        <>
          <p>{children}</p>
          <button
            onClick={() => setIsshow(false)}
            className="border p-1 border-gray-500 hover:bg-blue-500"
          >
            Hide
          </button>
        </>
      ) : (
        <button
          onClick={() => setIsshow(true)}
          className="border p-1 border-gray-500 hover:bg-blue-500"
        >
          Show
        </button>
      )}
    </section>
  );
}