export default async function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>AfterLogin Layout</h1>
      {children}
    </div>
  );
}
