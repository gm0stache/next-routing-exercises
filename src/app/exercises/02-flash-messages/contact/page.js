"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ToastContext } from "../../../../components/ToastProvider";

function ContactPage() {
  const router = useRouter();
  const { createToast } = React.useContext(ToastContext);

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createToast(
            "we received your message and will get back to you soon!",
            "success",
          );
          router.push("/exercises/02-flash-messages");
        }}
      >
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
