import type { Viewport } from "next"
import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { redirects } from "@/config/constants"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { badgeVariants } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { DotBg } from "@/components/dot-bg"
import { Icons } from "@/components/icons"

export const viewport: Viewport = {
  colorScheme: "dark",
}

export default function HomePage() {
  return (
    <section className="container flex min-h-[75vh] w-full max-w-5xl flex-col items-center justify-center">
      <DotBg />
      <Link
        href={siteConfig.githubLink}
        className={cn(
          badgeVariants({
            variant: "outline",
          }),
          "group mb-4 animate-fade-up text-sm font-medium text-zinc-300 transition-colors duration-150 hover:text-white"
        )}
        target="_blank"
        rel="noreferrer"
        style={{ animationDelay: "0.10s", animationFillMode: "both" }}
      >
        Star on Github
        <Icons.arrowRight
          className="ml-2 size-4 text-zinc-400 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>

      <h1
        className="mb-2 max-w-3xl animate-fade-up bg-gradient-to-b from-neutral-200 via-zinc-200 to-neutral-500 bg-clip-text text-center font-heading text-4xl font-semibold tracking-tight text-transparent md:text-7xl lg:text-8xl"
        style={{ animationDelay: "0.20s", animationFillMode: "both" }}
      >
        <Balancer>One Platform for Virtual Learning</Balancer>
      </h1>

      <p
        className="mb-4 max-w-lg animate-fade-up text-center text-base text-zinc-400 md:text-lg"
        style={{ animationDelay: "0.30s", animationFillMode: "both" }}
      >
        Plan, organize, and manage virtual workshop sessions
      </p>

      <Link
        href={redirects.toLogin}
        className={cn(
          buttonVariants(),
          "group animate-fade-up bg-gradient-to-r from-neutral-200 via-zinc-100 to-neutral-200 text-zinc-900"
        )}
        style={{ animationDelay: "0.40s", animationFillMode: "both" }}
      >
        Get Started
        <Icons.arrowRight
          className="ml-2 size-4 text-zinc-400 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </section>
  )
}
