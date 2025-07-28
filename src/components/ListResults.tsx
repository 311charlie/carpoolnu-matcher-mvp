import { type Match } from "../data/sample_carpool_data";

type ListResultsProps = {
  title: string; // the title of the list
  items: Match[]; // the matches relating to the title
  colorClass: string; // the color of the title
};

// represents a list that contains the matches that were either approved or rejected by the user
export default function ListResults({
  title,
  items,
  colorClass,
}: ListResultsProps) {
    /**
     * Show list items if list is not empty
     * Default: "none" text
     */
  return (
    <div>
      <h3 className={`text-lg font-bold ${colorClass}`}>{title}:</h3>
      {items.length ? (
        <ul className="pl-5 list-disc">
          {items.map((match, index) => (
            <li key={index}>
              {match.firstName} {match.lastName}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">none</p>
      )}
    </div>
  );
}
