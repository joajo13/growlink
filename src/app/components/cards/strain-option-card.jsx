import { GreenButton } from "../buttons/green-button";

export const StrainOptionCard = ({ option, onClick }) => {
  return (
    <>
      <h2 className="text-black/70 dark:text-white/90 ml-4 font-semibold text-md">
        asdas
      </h2>
      <p className="text-black/50 dark:text-white/70 ml-4 font-semibold text-sm">
        dsafdsf
      </p>
      <GreenButton size={"sm"} onClick={onClick} text={"Add"} />
    </>
  );
};
