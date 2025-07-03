import { HeartIcon, BoltIcon } from "@heroicons/react/24/outline";

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

const SupportCards = () => {
  const cards = [
    {
      title: "Personal Support",
      content:
        "At Dentech, we believe in the power of human connection. Our dedicated support specialists are available to provide personalized assistance and ensure you get the most out of our advanced software.",
      icon: HeartIcon,
    },
    {
      title: "Rapid Response",
      content:
        "We value your time and understand the importance of minimal disruption. Our support team prioritizes swift resolution of all inquiries, helping you maintain smooth and efficient practice operations.",
      icon: BoltIcon,
    },
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

export default SupportCards;
