import { Header } from '@/components/Header';
import { StickyHeaderPart } from '@/components/sticky-header-part';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col'>
      <Header />
      <StickyHeaderPart />
      {children}
    </div>
  );
}
