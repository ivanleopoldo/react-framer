import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";

function CustomButton(props) {
  const navigate = useNavigate();
  return (
    <motion.button
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 1 }}
      onClick={() => navigate(props.path)}
      transition={{ duration: 0.3, type: "spring" }}
      className={twMerge(
        "text-white px-6 py-2.5 bg-purple-800 rounded-lg font-bold",
        props.customCSS
      )}
    >
      {props.text}
    </motion.button>
  );
}

export default CustomButton;

CustomButton.defaultProps = {
  text: "Button",
  customCSS: "",
  path: "",
};
