import type { Metadata } from "next";
import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { SignInForm } from "@/components/auth/SignInForm";
import { Arrow } from "@/components/ui/Arrow";
import { Seal } from "@/components/ui/Seal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to manage your Trainers Connect profile and enquiries.",
  alternates: { canonical: "/sign-in" },
};

export default function SignInPage() {
  return (
    <section className="grid min-h-[calc(100svh-5rem)] lg:grid-cols-12">
      <div className="relative isolate hidden overflow-hidden bg-forest px-10 py-16 text-cream lg:col-span-6 lg:flex lg:flex-col lg:justify-between xl:px-16">
        <Image
          src="/images/14090.jpg"
          alt=""
          fill
          sizes="50vw"
          className="-z-10 object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest/70 via-forest/85 to-forest" />
        <div className="flex items-center justify-between">
          <span className="label text-cream/45">Member access</span>
          <span className="label text-cream/45">{site.address.city} · IST</span>
        </div>
        <div>
          <p className="max-w-md font-display text-[clamp(2.2rem,3.6vw,3.6rem)] leading-[1.02] tracking-[-0.04em]">
            The right expertise is closer than you think. <em className="italic text-gold">So is yours.</em>
          </p>
          <div className="mt-10 flex items-center gap-5">
            <Seal className="size-24 text-cream/45" />
            <p className="max-w-[16rem] text-[0.78rem] leading-relaxed text-cream/50">
              One profile. One network. A more direct route between expertise and opportunity.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-cream/15 pt-4">
          <Link href="/" className="label text-cream/50 hover:text-cream">← Back to {site.name}</Link>
          <Link href="/trainers-directory" className="group inline-flex items-center gap-2 text-[0.78rem] font-semibold text-cream">
            Browse the network <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="gutter flex items-center justify-center py-16 lg:col-span-6 lg:px-16">
        <SignInForm />
      </div>
    </section>
  );
}
