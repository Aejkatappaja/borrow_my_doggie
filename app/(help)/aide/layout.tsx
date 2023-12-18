export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='flex flex-col'>{children}</div>;
}
