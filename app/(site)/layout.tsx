import { Header } from '@/components/Header';
import { StickyHeaderPart } from '@/components/sticky-header-part';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=''>
      <Header />
      <StickyHeaderPart />
      {children}
    </div>
  );
}
