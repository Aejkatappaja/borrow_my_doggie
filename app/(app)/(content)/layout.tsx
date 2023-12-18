export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='flex flex-col'>{children}</div>;
}
