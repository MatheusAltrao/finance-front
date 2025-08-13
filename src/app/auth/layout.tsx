export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-[500px] mx-auto p-2 min-h-screen pt-[15vh]">
      {children}
    </div>
  );
}
