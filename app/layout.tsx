// Root pass-through layout — the real <html>/<body> live in app/[locale]/layout.tsx
// (required by Next.js to satisfy the root-layout convention).

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
