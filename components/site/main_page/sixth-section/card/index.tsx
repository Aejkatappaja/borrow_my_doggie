import { Title } from '@/components/site/ui/title';
import React from 'react';

interface ListItem {
  li: string;
}

interface TextItem {
  text: string;
}

interface OwnerData {
  header: string;
  first_title: string;
  list: ListItem[];
  second_title?: string;
  text: TextItem[];
}

interface CardProps {
  data: OwnerData;
  color: string;
}

export const Card: React.FC<CardProps> = ({ data, color }) => {
  const { header, first_title, list, second_title, text } = data;
  return (
    <div className='max-w-[390px] rounded-2xl border md:h-[705px] '>
      <header className={`rounded-t-2xl py-4 ${color}`}>
        <Title center variant='card' text={header} />
      </header>
      <section className='space-y-2 px-8 py-6'>
        <h2 className='underline'>{first_title}</h2>
        <ul className='list-tick space-y-2 px-4'>
          {list?.map((item, index: number) => {
            const { li } = item;
            return <li key={index}>{li}</li>;
          })}
        </ul>
        {second_title && <h2 className='underline'>{second_title}</h2>}
        {text?.map((item, index) => {
          const { text } = item;
          return <p key={index}>{text}</p>;
        })}
      </section>
    </div>
  );
};
