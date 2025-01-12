import React from "react";

import "./styles.css";
import ToastProvider from "../../../components/ToastProvider";

function FlashMsgLayout({ children }) {
  return (
    <html lang="en">
      <ToastProvider>
        <body>{children}</body>
      </ToastProvider>
    </html>
  );
}

export default FlashMsgLayout;
