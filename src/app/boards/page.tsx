export const dynamic = "force-dynamic";
export const revalidate = 0;

import { Metadata } from "next";
import { redirect } from "next/navigation";
import { IoAlbums, IoStarOutline } from "react-icons/io5";
import { auth } from "@/auth";
import { createBoard, getBoardsByUser } from "@/actions/boards";
import { BoardsSection, BoardsSectionWithBoardAdd } from "@/components/boards";
import { Navbar } from "@/components/ui";
import type { Board } from "@/interfaces";

export const metadata: Metadata = {
  title: "Boards",
};

export default async function BoardsPage() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) redirect("/auth/login?redirectTo=/boards");

  const { data } = await getBoardsByUser(userId);
  const boards = data || [];
  const favoriteBoards = boards.filter((board: Board) => board.isFavorite);

  const handleAddBoard = async () => {
    "use server";
    const { ok, data: newBoard } = await createBoard("New board");
    if (ok && newBoard?.id) {
      redirect(`/boards/${newBoard.id}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-auto flex-col items-center bg-white">
      <Navbar className="bg-white" isDarkContent={true} />
      <div className="flex w-full max-w-4xl flex-col gap-12 md:my-10">
        {favoriteBoards.length > 0 && (
          <BoardsSection
            Icon={IoStarOutline}
            title="Starred boards"
            boards={favoriteBoards}
          />
        )}
        <BoardsSectionWithBoardAdd
          Icon={IoAlbums}
          title="All boards"
          boards={boards}
          handleAdd={handleAddBoard}
        />
      </div>
    </main>
  );
}
