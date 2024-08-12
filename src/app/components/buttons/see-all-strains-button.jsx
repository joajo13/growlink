import { Button } from "@nextui-org/button";
import { FaEye } from "react-icons/fa";

export const SeeAllButton = () => (
    <Button variant="text" className="text-app-green mt-2">
      <FaEye size={16} className="mr-2" />
      See all
    </Button>
  );