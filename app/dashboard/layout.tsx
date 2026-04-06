export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <header className="sticky top-0 flex h-16 items-center justify-between border-b gap-4">hello</header>
      {children}
    </div>
  );
}
