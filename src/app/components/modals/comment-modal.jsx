import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "@nextui-org/react";

const comments = [
  {
    user: "User 1",
    comment: "Nice",
    datePosted: "2022-01-01",
  },
  {
    user: "User 2",
    comment: "Nice",
    datePosted: "2022-01-01",
  },
  {
    user: "User 3",
    comment: "Nice",
    datePosted: "2022-01-01",
  },
  {
    user: "User 4",
    comment: "Nice",
    datePosted: "2022-01-01",
  },
  {
    user: "User 5",
    comment: "Nice",
    datePosted: "2022-01-01",
  },
];

export const CommentModal = ({ isOpen, onOpen, onOpenChange }) => {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Comentarios
              </ModalHeader>
              <ModalBody className="max-h-[500px] overflow-y-auto">
                {comments.map((comment, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="flex gap-1">
                      <span className="text-gray-500 text-sm">
                        @{comment.user}:
                      </span>
                      <p className="text-gray-500 text-sm">{comment.comment}</p>
                    </div>
                    <div className="flex justify-start items-center">
                      <div className="h-1 w-1 rounded-full bg-gray-500 mr-1"></div>
                      <p className="text-gray-500 text-sm">
                        {comment.datePosted}
                      </p>
                    </div>
                  </div>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Cerrar</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
