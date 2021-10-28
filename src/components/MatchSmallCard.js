import { React } from "react";

export const MatchSmallCard = ({ teamName, match }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  return (
    <div className="MatchSmallCard">
      <h3>Latest Matches</h3>

      <p>
        {match.team1} vs {match.team2}
      </p>
    </div>
  );
};
