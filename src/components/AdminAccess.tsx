import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const AdminAccess = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showAdminLink, setShowAdminLink] = useState(false);

  const handleLogoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount >= 7) {
      setShowAdminLink(true);
      setTimeout(() => {
        setShowAdminLink(false);
        setClickCount(0);
      }, 5000); // Link visible for 5 seconds
    }
  };

  return (
    <div className="relative">
      {/* Hidden clickable area */}
      <div 
        className="absolute top-4 right-4 w-8 h-8 cursor-pointer opacity-0"
        onClick={handleLogoClick}
      />
      
      {/* Admin access link */}
      {showAdminLink && (
        <div className="fixed top-4 right-4 z-50 animate-fade-in">
          <Link to="/admin-panel-secret">
            <Button size="sm" variant="outline" className="cosmic-glow">
              <Settings className="w-4 h-4 mr-2" />
              Admin
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdminAccess;