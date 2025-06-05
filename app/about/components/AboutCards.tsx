// app/about/about/AboutCards.tsx
import React from 'react';
import { HeartIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

interface CardProps {
  title: string;
  content: string;
  icon: React.ElementType;
}

const Card: React.FC<CardProps> = ({ title, content, icon: Icon }) => {
  return (
    <div className="border border-green-500 rounded-lg p-8 bg-gray-50">
      <div className="flex items-center mb-6">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <Icon className="h-6 w-6 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

const AboutCards = () => {
  const cards = [
    {
      title: 'Our Values',
      content: 'More and more we see the importance of staying customer centric, value focused. At Dentech, each member of our team embodies certain traits that ensure your software is made with the same care you have for your patients.',
      icon: HeartIcon
    },
    {
      title: 'Our Vision',
      content: 'We will stay committed to servicing our customers and the dental industry with the care and concern that we are known for while staying on the cutting edge of technology.',
      icon: RocketLaunchIcon
    }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <Card 
              key={card.title}
              title={card.title}
              content={card.content}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCards;