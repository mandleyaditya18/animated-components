import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from "./Spinner/Spinner";

const BUTTON_STATES = {
  idle: "Subscribe",
  loading: <Spinner color="white" />,
  success: "Subscribed!",
};

type ButtonStateType = keyof typeof BUTTON_STATES;

export const ButtonWithLoader = () => {
  const [buttonState, setButtonState] = useState<ButtonStateType>("idle");

  const onClickHandler = () => {
    setButtonState("loading");

    setTimeout(() => {
      setButtonState("success");
    }, 1500);

    setTimeout(() => {
      setButtonState("idle");
    }, 3500);
  };

  return (
    <button
      className="h-8 w-32 grid place-items-center bg-blue-500 text-white rounded-lg"
      onClick={onClickHandler}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={buttonState}
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          className="text-sm font-normal"
        >
          {BUTTON_STATES[buttonState]}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};
