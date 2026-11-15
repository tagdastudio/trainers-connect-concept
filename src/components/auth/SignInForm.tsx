"use client";

import { AppLink as Link } from "@/components/ui/AppLink";
import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";

export function SignInForm() {
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="w-full max-w-sm"
    >
      <span className="label text-accent">Member access</span>
      <h1 className="mt-3 font-display text-[clamp(2.3rem,4vw,3.4rem)] leading-[0.98] tracking-[-0.04em]">Welcome back.</h1>
      <p className="mt-3 text-[0.88rem] leading-relaxed text-ink-2">
        Sign in to manage your profile, enquiries and visibility in the network.
      </p>

      {sent ? (
        <div className="mt-7 border-l-2 border-accent bg-paper-2/60 p-4 text-[0.82rem] leading-relaxed text-ink-2">
          <strong className="block text-ink">Demo only.</strong>
          Authentication would be connected to the live platform. No credentials have been checked.
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-5">
        <div>
          <label htmlFor="login-email" className="label text-[0.56rem] text-muted">Username or email</label>
          <input id="login-email" type="text" required autoComplete="username" className="form-line mt-1" placeholder="you@example.com" />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="login-password" className="label text-[0.56rem] text-muted">Password</label>
            <button type="button" onClick={() => setShow((v) => !v)} className="text-[0.62rem] uppercase tracking-[0.1em] text-muted hover:text-accent">
              {show ? "Hide" : "Show"}
            </button>
          </div>
          <input id="login-password" type={show ? "text" : "password"} required autoComplete="current-password" className="form-line mt-1" placeholder="••••••••" />
        </div>
      </div>

      <button type="submit" className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-ink px-6 py-4 text-[0.86rem] font-semibold text-cream transition-colors duration-500 hover:bg-accent">
        Sign in <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
      </button>

      <div className="mt-6 flex flex-col gap-2 border-t border-ink/15 pt-5 text-[0.72rem] text-muted">
        <span>
          Don&apos;t have an account?{" "}
          <Link href="/submit-listing" className="text-accent underline underline-offset-2">Join as a trainer</Link>
        </span>
        <span>
          Forgot your password?{" "}
          <Link href="/contact-us" className="text-accent underline underline-offset-2">Contact the team</Link>
        </span>
      </div>
    </form>
  );
}
