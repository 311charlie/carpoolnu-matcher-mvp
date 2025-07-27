import { type Match } from "../data/sample_carpool_data"

type MatchCardProps = {
  match: Match
  onApprove: () => void
  onReject: () => void
  position: { index: number; total: number }
}

export default function MatchCard({ match, onApprove, onReject, position }: MatchCardProps) {
  // stores the full name of the person matched
  const fullName = match.firstName + " " + match.lastName;

  return (
    <div className="relative max-w-sm w-full bg-white shadow-lg rounded-xl p-6 flex flex-col space-y-4">

      {/* shows current position in the list on the top right corner */}
      <div className="absolute top-4 right-4 text-sm text-gray-500 font-semibold select-none">
        {position.index} of {position.total}
      </div>

      {/* information shown: full name, employer, start location, end location */}
      <h2 className="text-2xl font-semibold">{fullName}</h2>
      <p className="text-gray-600">{match.employer}</p>
      <div className="text-gray-800 space-y-1">
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
      <div className="mt-auto flex justify-between">
        <button
          onClick={onReject}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
  >
          👎 Reject
        </button>
        <button
          onClick={onApprove}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
        >
          👍 Approve
        </button>
      </div>
    </div>
  )
}
