import React from "react";

import ScreenSaver from "../../../../components/ScreenSaver";

function DynamicScreenSaver({ params }) {
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={params.logoColor} />
    </main>
  );
}

export default DynamicScreenSaver;
