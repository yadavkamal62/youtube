import React, { useState } from 'react';
import Button from "./Button"

const list = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Cricket",
  "News",
  "Cooking",
  "Podcasts",
  "Tech",
  "Recently uploaded",
  "Watched",
  "New to you"
];

const ButtonList = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex items-center gap-3 px-6 py-3 overflow-x-auto whitespace-nowrap no-scrollbar sticky top-0 bg-white z-10">
      {list.map((item, index) => (
        <Button
          key={index}
          name={item}
          isActive={activeTab === item}
          onClick={() => setActiveTab(item)}
        />
      ))}
    </div>
  );
};

export default ButtonList;