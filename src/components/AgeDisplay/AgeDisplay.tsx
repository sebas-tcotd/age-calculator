import { Age } from "../../models";

type AgeDisplayProps = {
  ageData: Age;
};

export const AgeDisplay = ({ ageData }: AgeDisplayProps) => {
  return (
    <div
      className="flex flex-col gap-[-1rem]"
      role="group"
      aria-label="Age Information"
    >
      {Object.keys(ageData).map((key) => (
        <AgeItem key={key} value={ageData[key as keyof Age]} label={key} />
      ))}
    </div>
  );
};

const AgeItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <p className="text-lg font-extra-bold italic leading-none">
      <span className="text-primary-purple">{value ?? "--"}</span>
      {value !== "--" ? " ".concat(label) : `${label}`}
    </p>
  );
};
