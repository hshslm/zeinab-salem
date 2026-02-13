"use client";

import { useRouter } from "next/navigation";

export default function BackButton(): React.ReactElement {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-subtle hover:text-accent transition-all duration-200 animate-fade-in-up cursor-pointer group"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      <span className="group-hover:-translate-x-1 transition-transform duration-200">
        Back
      </span>
    </button>
  );
}
