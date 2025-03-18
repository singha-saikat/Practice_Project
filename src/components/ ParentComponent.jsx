/* eslint-disable react/display-name */
import  { useRef, forwardRef, useImperativeHandle } from 'react';

// Child Component
const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // useImperativeHandle হুকটি ব্যবহার করে শুধুমাত্র focusInput ফাংশনটি এক্সপোজ করা হচ্ছে।
  // এটি ensure করে যে ParentComponent শুধুমাত্র এই ফাংশনটি কল করতে পারবে, 
  // কিন্তু ChildComponent এর অন্যান্য কোনো DOM এলিমেন্ট বা রেফারেন্স অ্যাক্সেস করতে পারবে না।
  // এখানে useImperativeHandle দুটি প্যারামিটার গ্রহণ করে:
  // 1. ref: এটি ParentComponent থেকে আসা রেফারেন্স।
  // 2. একটি ফাংশন যা একটি অবজেক্ট রিটার্ন করে, যেখানে নির্দিষ্ট মেথড বা প্রপার্টি ডিফাইন করা হয়।
  // এই ক্ষেত্রে, focusInput মেথডটি এক্সপোজ করা হয়েছে যা inputRef.current.focus() কল করে ইনপুট ফিল্ডে ফোকাস সেট করবে।

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    }
  }));

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter some text" />
      <p>এই কম্পোনেন্টে অন্যান্য অনেক ইলিমেন্ট থাকতে পারে, কিন্তু এগুলো এক্সপোজ হচ্ছে না।</p>
    </div>
  );
});

// Parent Component
function ParentComponent() {
  const childRef = useRef(null);

  const handleFocus = () => {
    // শুধুমাত্র focusInput মেথডটি কল করা হচ্ছে, অন্য কোনো ইন্টারনাল ফাংশন বা ইলিমেন্ট অ্যাক্সেস করা যাবে না
    childRef.current.focusInput();
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button className='btn btn-primary' onClick={handleFocus}>Focus on Child Input</button>
    </div>
  );
}

export default ParentComponent;