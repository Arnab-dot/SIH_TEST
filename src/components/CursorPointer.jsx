import React, { useRef } from "react";
import WaterWave from "react-water-wave";

const CursorPointer = ({ children }) => {
  const waterRef = useRef();

  const handleMouseMove = (event) => {
    if (waterRef.current) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Manual drop at mouse position
      if (typeof waterRef.current.dropAt === "function") {
        waterRef.current.dropAt(x, y, 30, 0.03);
      }
    }
  };

  return (
    <WaterWave
      ref={waterRef}
      imageUrl=""                // Use "" for transparent, or add an image path
      dropRadius={0}
      perturbance={0.03}
      resolution={512}
      interactive={false}
      style={{ width: "100vw", height: "100vh" }}
    >
      {() => (
        <div
          style={{ width: "100vw", height: "100vh" }}
          onMouseMove={handleMouseMove}
        >
          {children}
        </div>
      )}
    </WaterWave>
  );
};

export default CursorPointer;
