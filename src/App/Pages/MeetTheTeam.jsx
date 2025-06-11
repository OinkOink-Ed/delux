import { CardTeam } from "../ui/CardTeam";

export default function MeetTheTeam() {
  return (
    <div className="flex h-auto justify-center mt-24">
      <div className="flex h-auto max-w-[1600px] justify-center gap-24 flex-wrap">
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
      </div>
    </div>
  );
}
