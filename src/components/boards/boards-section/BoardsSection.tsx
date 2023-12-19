import { IconType } from "react-icons";
import { BoardItem } from "@/components/boards";
import type { Board } from "@/interfaces";

interface Props {
  Icon?: IconType;
  title: string;
  boards: Board[];
  children?: React.ReactNode;
}

export const BoardsSection = ({ Icon, title, boards, children }: Props) => {
  return (
    <div>
      <header className="m-2 flex items-center gap-4 font-bold">
        {Icon && <Icon size={20} />}
        <h3>{title}</h3>
      </header>
      <ul className="grid grid-cols-4 gap-4">
        {boards.map((board) => (
          <BoardItem key={board.id} board={board} />
        ))}
        {children}
      </ul>
    </div>
  );
};
