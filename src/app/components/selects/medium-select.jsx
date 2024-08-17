// import React, { useState } from "react";
// import { mediumTypes } from "../../constants/mockups";

// export const MediumSelect = () => {
//   const [selectedMedium, setSelectedMedium] = useState([]);
//   const [value, setValue] = useState(1);

//   const handleAddMedium = (mediumId) => {
//     const medium = mediumTypes.find((medium) => medium.id == mediumId);

//     if (selectedMedium.includes(medium)) {
//       return;
//     } else {
//       setSelectedMedium([...selectedMedium, medium]);
//     }
//   };

//   const handleRemoveStrain = (mediumId) => {
//     setSelectedMedium(
//       selectedMedium.filter((medium) => medium.id !== mediumId)
//     );
//   };

//   return (
//     <>
//       <div className="flex items-center py-2 mt-4">
//         <PiTentBold className="text-app-green mr-1" size={24} />
//         <h2 className="text-app-green font-semibold text-xl">Medium</h2>
//       </div>

//       <StrainAutocomplete
//         value={value}
//         setValue={setValue}
//         handleAddStrain={handleAddMedium}
//       />

//       <SelectedStrainsList
//         handleRemoveStrain={handleRemoveStrain}
//         selectedStrains={selectedMedium}
//       />

//       {selectedMedium.length > 2 && <SeeAllButton />}
//     </>
//   );
// };
