import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const TABS = ["Overview", "Features", "Pricing", "Support"];

export const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex gap-2">
      {TABS.map((tab, index) => (
        <motion.li
          layout
          key={index}
          className={clsx(
            "relative outline-none list-none px-2 py-1 cursor-pointer transition-colors",
            activeTab === index ? "text-gray-800" : "text-gray-700",
          )}
          onFocus={() => setActiveTab(index)}
          onMouseOver={() => setActiveTab(index)}
          onMouseLeave={() => setActiveTab(index)}
        >
          {activeTab === index ? (
            <motion.div
              layoutId="tab-indicator"
              className="inset-0 absolute bg-black/5 rounded-lg"
              transition={{ duration: 0.2 }}
            />
          ) : null}
          <span className="text-sm font-normal">{tab}</span>
        </motion.li>
      ))}
    </div>
  );
};
