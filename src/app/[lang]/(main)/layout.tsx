import Header from "@/components/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-dvh lg:h-screen lg:overflow-hidden">
      <Header />
      {children}
    </div>
  );
}
