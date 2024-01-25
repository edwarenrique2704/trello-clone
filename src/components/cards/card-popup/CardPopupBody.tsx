import { useState } from "react";
import clsx from "clsx";
import { LuText } from "react-icons/lu";
import { updateCardDescription } from "@/actions";
import { Button, EditableWysiwyg } from "@/components/ui";
import type { CardWithList } from "@/interfaces";

interface Props {
  cardWithList: CardWithList;
}

const CardPopupBody = ({ cardWithList }: Props) => {
  const [description, setDescription] = useState(cardWithList.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateDescription = async () => {
    setIsEditing(false);
    await updateCardDescription(
      cardWithList.list.boardId,
      cardWithList.list.id,
      cardWithList.id,
      description
    );
  };

  return (
    <div className="col-span-9">
      <span className="flex items-center justify-between">
        <span className="flex items-center gap-4">
          <LuText size={20} className="text-text-alternative" />
          <h2 className="text-lg font-bold text-text-alternative">
            Description
          </h2>
        </span>
        <Button
          className={clsx({ invisible: isEditing, visible: !isEditing })}
          size="sm"
          variant="secondary"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      </span>
      <div
        id="wysiwyg"
        className="ml-9 mt-4 flex min-h-80 flex-col gap-2 text-sm"
      >
        {isEditing && (
          <>
            <EditableWysiwyg
              content={description}
              setContent={setDescription}
            />
            <div className="flex flex-row items-center gap-1">
              <Button size="sm" onClick={handleUpdateDescription}>
                Save
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="!bg-background"
                onClick={() => {
                  setIsEditing(false);
                  setDescription(cardWithList.description);
                }}
              >
                Cancel
              </Button>
            </div>
          </>
        )}
        {!isEditing && (
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            onClick={() => setIsEditing(true)}
          ></p>
        )}
      </div>
    </div>
  );
};
export default CardPopupBody;
