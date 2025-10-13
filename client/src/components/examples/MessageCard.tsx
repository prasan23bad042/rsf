import MessageCard from "../MessageCard";

export default function MessageCardExample() {
  return (
    <div className="space-y-4 p-8">
      <MessageCard 
        message="Every moment with you is a treasure I hold close to my heart."
        delay={0}
      />
      <MessageCard 
        message="Your smile lights up my world in ways I never imagined possible."
        delay={200}
      />
    </div>
  );
}
