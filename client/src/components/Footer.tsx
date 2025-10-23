import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-muted-foreground" data-testid="text-footer">
           A small gift Made with
          </p>
          <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" data-testid="icon-footer-heart" />
          <p className="text-muted-foreground">
            just for you
          </p>
        </div>
        
        <p className="font-script text-2xl text-primary" data-testid="text-footer-year">
  Once again Many More Happy returns of the day Shirley....
</p>
      </div>
    </footer>
  );
}
