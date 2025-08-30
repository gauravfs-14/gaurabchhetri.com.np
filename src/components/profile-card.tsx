import { Clock, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import CurrentTime from "./current-time";

export default function ProfileCard() {
  return (
    <div className="flex items-center">
      <Avatar className="w-20 h-20 sm:w-26 sm:h-26 hover:rotate-4 transition-transform duration-300 ease-in-out relative">
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
        <div className="flex items-center space-x-2 text-xl sm:text-2xl font-semibold">
          <span>Gaurab Chhetri</span>
        </div>
        <div className="text-muted-foreground text-sm sm:text-base font-medium mb-1">
          Building things that make a difference.
        </div>
        <div className="flex items-center text-sm font-normal">
          <MapPin className="inline mr-1 w-3 sm:w-4 text-muted-foreground" />
          <span className="text-muted-foreground text-sm sm:text-base">Austin, TX</span>
          <Clock className="inline ml-4 mr-1 w-3 sm:w-4 text-muted-foreground" />
          <span className="text-muted-foreground text-sm sm:text-base">
            <CurrentTime />
          </span>
        </div>
      </div>
    </div>
  );
}
