import React from "react";

import Link from "next/link";

const defaultColors = ["red", "blue", "hotpink"];

function ScreenSaverExercise() {
  return (
    <ul>
      {defaultColors.map((color) => {
        return (
          <li>
            <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ScreenSaverExercise;
