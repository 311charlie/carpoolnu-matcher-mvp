import { useState } from "react";
import { matchList } from "./data/sample_carpool_data";
import MatchCard from "./components/MatchCard";

export default function App() {
  // tracks the current index in the match list
  const [currentIndex, setCurrentIndex] = useState(0);

  // increases index if current index is less than the list length
  const next = () =>
    setCurrentIndex((i) =>
      i + 1 < matchList.length ? i + 1 : matchList.length
    );

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
   * else:
   * - show information for the current match
   */
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {finished ? (
        <div className="max-w-sm w-full bg-white shadow-lg rounded-xl p-6 flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 flex-1 flex items-center justify-center">
            🎉 No More Matches
          </h2>
        </div>
      ) : (
        <MatchCard
          match={matchList[currentIndex]}
          onApprove={next}
          onReject={next}
          position={position}
        />
      )}
    </div>
  );
}
