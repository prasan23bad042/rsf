import MessageCard from "./MessageCard";

interface MessagesSectionProps {
  messages?: string[];
}

export default function MessagesSection({ messages = [] }: MessagesSectionProps) {
  const defaultMessages = [
    "From the moment I met you, I knew my life would never be the same. You brought color to my world and joy to every single day.",
    "Your laughter is my favorite sound, your smile is my favorite sight, and being with you is my favorite place to be.",
    "Thank you for being you - for your kindness, your strength, your beautiful heart. You make everything better just by being in it.",
    "Every day with you is a gift I cherish. Here's to celebrating you today and loving you always.",
  ];

  const displayMessages = messages.length > 0 ? messages : defaultMessages;

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-3xl mx-auto">
        <h2 
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
          data-testid="text-messages-title"
        >
          A Letter to You
        </h2>
        
        <div className="space-y-6">
          {displayMessages.map((message, index) => (
            <MessageCard 
              key={index}
              message={message}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
