import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-white mb-4">Masoclef Music Platform</h1>
        <p className="text-xl text-white/90 max-w-md mx-auto">
          Discover our comprehensive music learning courses
        </p>
        <Link to="/course">
          <Button variant="hero" size="lg">
            View Course Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
