import { useEffect, useRef, type ReactNode } from "react";
export function Modal({
  children,
  close,
  label,
}: {
  children: ReactNode;
  close: () => void;
  label: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const el = ref.current;
    el?.showModal();
    return () => el?.close();
  }, []);
  return (
    <dialog
      ref={ref}
      className="scene-dialog"
      aria-label={label}
      onCancel={close}
    >
      {children}
    </dialog>
  );
}
