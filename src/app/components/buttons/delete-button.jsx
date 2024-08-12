import { Button } from "@nextui-org/button";
import { FaTrash } from "react-icons/fa";

export const DeleteButton = ({ onClick }) => {
  return (
    <Button
      isIconOnly
      variant="light"
      color="danger"
      size="sm"
      onClick={onClick}
    >
      <FaTrash size={16} />
    </Button>
  );
};
