import { useState } from "react";
import Confetti from "../Confetti";
import { Button } from "@/components/ui/button";

export default function ConfettiExample() {
  const [trigger, setTrigger] = useState(false);

  const handleClick = () => {
    setTrigger(false);
    setTimeout(() => setTrigger(true), 50);
  };

  return (
    <div className="flex items-center justify-center h-96">
      <Button onClick={handleClick} data-testid="button-trigger-confetti">
        Trigger Confetti
      </Button>
      <Confetti trigger={trigger} count={50} />
    </div>
  );
}
