import { useState } from "react";

export default function useToggle(initialState = false) {
  const [hidden, setHidden] = useState(initialState);

  const updateToggle = () => {
    setHidden(!hidden);
  };

  const updateVisible = () => {
    setHidden(true);
  };

  const updateHidden = () => {
    setHidden(false);
  };

  return {
    hidden,
    updateToggle,
    updateVisible,
    updateHidden,
  };
}
