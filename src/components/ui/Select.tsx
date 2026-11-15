"use client";

import { useEffect, useId, useRef, useState } from "react";

type Option = { value: string; label: string };

type Props = {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  options: readonly (string | Option)[];
  placeholder?: string;
  id?: string;
  className?: string;
  buttonClassName?: string;
  ariaLabel?: string;
};

/**
 * An editorial listbox: a paper panel that opens under the field, with numbered rows,
 * keyboard support and a hidden input so it still submits with a plain form.
 */
export function Select({
  name,
  value,
  defaultValue = "",
  onChange,
  options,
  placeholder = "Select",
  id,
  className = "",
  buttonClassName = "",
  ariaLabel,
}: Props) {
  const items: Option[] = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  const generated = useId();
  const fieldId = id ?? generated;
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  const [inner, setInner] = useState(defaultValue);
  const [active, setActive] = useState(-1);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLDivElement>(null);

  const current = value !== undefined ? value : inner;
  const selected = items.find((o) => o.value === current);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  useEffect(() => {
    if (open) {
      const rect = button.current?.getBoundingClientRect();
      setUp(Boolean(rect && rect.bottom + 340 > window.innerHeight));
      const index = Math.max(0, items.findIndex((o) => o.value === current));
      setActive(index);
      requestAnimationFrame(() => {
        list.current?.focus();
        const chosen = list.current?.querySelector<HTMLElement>('[aria-selected="true"]');
        if (chosen && list.current) {
          list.current.scrollTop = Math.max(0, chosen.offsetTop - list.current.clientHeight / 2 + chosen.offsetHeight / 2);
        }
      });
    }
    // Reset the highlight only when the panel opens, not on every parent render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const choose = (option: Option) => {
    if (value === undefined) setInner(option.value);
    onChange?.(option.value);
    setOpen(false);
    button.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      button.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(items.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const option = items[active];
      if (option) choose(option);
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={root} className={`relative ${className}`} onKeyDown={onKeyDown}>
      {name ? <input type="hidden" name={name} value={current} /> : null}

      <button
        ref={button}
        type="button"
        id={fieldId}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        className={`group flex w-full items-center justify-between gap-3 text-left ${buttonClassName}`}
      >
        <span className={selected ? "text-ink" : "text-muted/80"}>{selected?.label ?? placeholder}</span>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`size-3.5 shrink-0 text-muted transition-transform duration-500 ease-[var(--ease-expo)] ${open ? "rotate-180 text-accent" : ""}`}
        >
          <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        ref={list}
        role="listbox"
        aria-labelledby={fieldId}
        tabIndex={-1}
        className={`absolute left-0 z-[65] w-full min-w-[15rem] border border-ink/15 bg-cream shadow-[0_24px_60px_-24px_rgba(22,36,28,0.45)] transition-all duration-300 ease-[var(--ease-expo)] focus:outline-none ${
          up ? "bottom-[calc(100%+0.55rem)] origin-bottom" : "top-[calc(100%+0.55rem)] origin-top"
        } ${open ? "visible translate-y-0 opacity-100" : `invisible opacity-0 ${up ? "translate-y-1" : "-translate-y-1"}`}`}
      >
        <div className="flex items-center justify-between border-b border-ink/12 px-4 py-2">
          <span className="text-[0.5rem] uppercase tracking-[0.16em] text-muted">Choose one</span>
          <span className="text-[0.5rem] uppercase tracking-[0.16em] text-muted">{String(items.length).padStart(2, "0")} options</span>
        </div>
        <ul className="max-h-[17rem] overflow-y-auto py-1">
          {items.map((option, i) => {
            const isSelected = option.value === current;
            return (
              <li key={option.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(option)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-[0.82rem] transition-colors duration-200 ${
                    active === i ? "bg-paper-2 text-ink" : "text-ink-2"
                  } ${isSelected ? "font-semibold text-ink" : ""}`}
                >
                  <span className={`w-5 text-[0.52rem] tabular ${isSelected ? "text-accent" : "text-muted/70"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{option.label}</span>
                  {isSelected ? (
                    <svg viewBox="0 0 16 16" fill="none" className="size-3.5 text-accent" aria-hidden="true">
                      <path d="m3 8.5 3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
