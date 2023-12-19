import { Header } from '@/components/site/header';
import { StickyHeaderPart } from '@/components/site/sticky-header-part';

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
