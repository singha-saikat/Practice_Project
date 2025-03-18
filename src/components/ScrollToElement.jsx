import { useRef } from "react";

export default function ScrollToElement() {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
      // smooth scroll ব্যবহার করে নির্দিষ্ট এলিমেন্টে যাওয়া হচ্ছে
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div>
      <button onClick={scrollToSection} className="btn">Scroll to Section</button>
      {/* কিছুটা বেশি হাইট দেয়া হয়েছে যাতে স্ক্রল করার প্রয়োজন হয় */}
      <div style={{ height: '150vh', background: '#f0f0f0' }}>
        Scroll down to see the section
      </div>
      <div ref={sectionRef} style={{ height: '100px', background: '#add8e6' }}>
        Target Section
      </div>
    </div>
  );
}