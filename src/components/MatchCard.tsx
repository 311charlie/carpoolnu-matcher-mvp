import { type Match } from "../data/sample_carpool_data";

type MatchCardProps = {
  match: Match; // the user that was matched
  onApprove: () => void; // stores function when clicking Approve button
  onReject: () => void; // stores function when clicking reject button
  position: { index: number; total: number }; // current position in the list out of total
};

// represents a card that stores all of the information for the match, includes buttons to approve and reject match
export default function MatchCard({
  match,
  onApprove,
  onReject,
  position,
}: MatchCardProps) {
  // stores the full name of the person matched
  const fullName = match.firstName + " " + match.lastName;

  return (
    <div className="relative flex flex-col w-full max-w-sm p-6 space-y-4 bg-white shadow-lg rounded-xl">
      {/* shows current position in the list on the top right corner */}
      <div className="absolute text-sm font-semibold text-gray-500 select-none top-4 right-4">
        {position.index} of {position.total}
      </div>

      {/* information shown: full name, employer, start location, end location */}
      <h2 className="text-2xl font-semibold">{fullName}</h2>
      <p className="text-gray-600">{match.employer}</p>
      <div className="space-y-1 text-gray-800">
        <p>
          <strong>From:</strong> {match.startLocation} (
          {match.startDistanceDelta.toFixed(1)} mi)
        </p>
        <p>
          <strong>To:</strong> {match.endLocation} (
          {match.endDistanceDelta.toFixed(1)} mi)
        </p>
      </div>

      {/* reject and approve button for matches */}
      <div className="flex justify-between mt-auto">
        <button
          onClick={onReject}
          className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          👎 Reject
        </button>
        <button
          onClick={onApprove}
          className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          👍 Approve
        </button>
      </div>
    </div>
  );
}
