import CommentsInterface from "./comments/CommentInterface";
import InfoDetails from "./Info/InfoDetails";
import PlayersList from "./players/PlayersList";

interface EventTabContentProps {
  activeTab: "info" | "player" | "comments";
}

export default function EventTabContent({ activeTab }: EventTabContentProps) {
  return (
    <div className="mb-8">
      {activeTab === "info" && <InfoDetails />}

      {activeTab === "player" && <PlayersList />}

      {activeTab === "comments" && <CommentsInterface />}
    </div>
  );
}
