import { Clock, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ProfileCard() {
  const getAustinTime = () => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/Chicago", // Austin uses Central Time
      hour12: true,
      timeStyle: "short" as const,
      dateStyle: "short" as const,
    };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(new Date());
  };
  return (
    <div className="flex items-center">
      <Avatar className="w-26 h-26 hover:rotate-4 transition-transform duration-300 ease-in-out relative">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/69834677?v=4"
          alt="@gauravfs-14 (Gaurab Chhetri)"
          className="hover:scale-120 transition-transform duration-300 ease-in-out border-2 border-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 rounded-full object-cover"
        />
        <AvatarFallback className="hover:scale-120 transition-transform duration-300 ease-in-out">
          GC
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col ml-4 gap-1">
        <div className="flex items-center space-x-2 text-2xl font-semibold">
          <span>Gaurab Chhetri (gow-rab)</span>
        </div>
        <div className="text-muted-foreground font-medium mb-1">
          Full Stack Dev & Student Researcher
        </div>
        <div className="flex items-center text-sm font-normal">
          <MapPin className="inline mr-1 w-4 text-muted-foreground" />
          <span className="text-muted-foreground text-md">Austin, TX</span>
          <Clock className="inline ml-4 mr-1 w-4 text-muted-foreground" />
          <span className="text-muted-foreground text-md">
            {getAustinTime()}
          </span>
        </div>
      </div>
    </div>
  );
}
