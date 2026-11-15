import NextLink from "next/link";

/**
 * The site is exported statically. Next's automatic RSC prefetch looks for
 * route payloads that a plain file host does not expose for every dynamic
 * path, so navigation is left to the click. Client-side transitions still work.
 */
export function AppLink(props: React.ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={false} {...props} />;
}
