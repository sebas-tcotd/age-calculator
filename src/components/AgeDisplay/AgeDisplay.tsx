import { Age } from "../../models";

type AgeDisplayProps = {
  ageData: Age;
};

export const AgeDisplay = ({ ageData }: AgeDisplayProps) => {
  return (
    <output form="date-form" className="flex flex-col" role="group" aria-label="Age Information">
      <time dateTime={`${ageData.years}-${ageData.months}-${ageData.days}`}>
        {Object.keys(ageData)
          .slice()
          .reverse()
          .map((key) => (
            <AgeItem key={key} value={ageData[key as keyof Age]} label={key} />
          ))}
      </time>
    </output>
  );
};

const AgeItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <p className="text-lg lg:text-xl font-extra-bold italic leading-none">
      <data value={value} className="text-primary-purple">
        {value ?? "--"}
      </data>
      {value !== "--" ? " ".concat(label) : `${label}`}
    </p>
  );
};
