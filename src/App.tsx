import { useState } from "react";
import { type Match, matchList  } from "./data/sample_carpool_data";
import MatchCard from "./components/MatchCard";
import ListResults from "./components/ListResults";

export default function App() {
  // tracks the current index in the match list
  const [currentIndex, setCurrentIndex] = useState(0);

  // tracks approved and rejected matches
  const [approvedMatches, setApprovedMatches] = useState<Match[]>([]);
  const [rejectedMatches, setRejectedMatches] = useState<Match[]>([]);

  // increases index if current index is less than the list length
  const next = () =>
    setCurrentIndex((i) =>
      i + 1 < matchList.length ? i + 1 : matchList.length
    );

  // approve current match by adding to approve list, then move to next match
  const onApprove = () => {
    setApprovedMatches((prev) => [...prev, matchList[currentIndex]]);
    next();
  };

  // reject current match by adding to reject list, then move to next match
  const onReject = () => {
    setRejectedMatches((prev) => [...prev, matchList[currentIndex]]);
    next();
  };

  // check if we went through the entire list
  const finished = currentIndex >= matchList.length;

  // used to show our current position in the list
  const position = {
    index: Math.min(currentIndex + 1, matchList.length),
    total: matchList.length,
  };

  /**
   * if we went through the entire list:
   * - show that we have no more matches
   * - also show approved and rejected lists
   * else:
   * - show information for the current match
   */
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      {finished ? (
        <div className="flex flex-col w-full max-w-sm p-6 space-y-4 bg-white shadow-lg rounded-xl">
          <h2 className="flex items-center justify-center flex-1 text-2xl font-semibold text-gray-800">
            🎉 No More Matches
          </h2>
          {/* approved matches */}
          <ListResults
            title="Approved"
            items={approvedMatches}
            colorClass="text-green-600"
          />
          {/* rejected matches */}
          <ListResults
            title="Rejected"
            items={rejectedMatches}
            colorClass="text-red-600"
          />
        </div>
      ) : (
        <MatchCard
          match={matchList[currentIndex]}
          onApprove={onApprove}
          onReject={onReject}
          position={position}
        />
      )}
    </div>
  );
}
