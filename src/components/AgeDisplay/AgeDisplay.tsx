export const AgeDisplay = () => {
  return (
    <div className="flex flex-col gap-[-1rem]" role="group" aria-label="Age Information">
      <p className="text-lg font-extra-bold italic leading-tight">
        <span className="text-primary-purple">38</span> years
      </p>
      <p className="text-lg font-extra-bold italic leading-none">
        <span className="text-primary-purple">3</span> months
      </p>
    </div>
  );
};
