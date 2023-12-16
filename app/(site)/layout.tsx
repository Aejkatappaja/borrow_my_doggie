import { Header } from '@/components/Header';
import { StickyPart } from '@/components/StickyPart';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=''>
      <Header />
      <StickyPart />
      {children}
    </div>
  );
}
