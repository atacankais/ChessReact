// ChessLogic.js
import { useState } from "react";

const useChessLogic = (initialBoard) => {
   const [board, setBoard] = useState(initialBoard);
   const [selectedPiece, setSelectedPiece] = useState(null);

   function handlePieceClick(row, col) {
      const piece = board[row][col].piece;
      if (piece) {
         setSelectedPiece({ piece, row, col });
      }
   }

   function handleSquareClick(row, col) {
      if (selectedPiece) {
         const { piece, row: oldRow, col: oldCol } = selectedPiece;
         const newBoard = [...board];
         newBoard[row][col].piece = piece;
         newBoard[oldRow][oldCol].piece = null;
         setBoard(newBoard);
         setSelectedPiece(null);
      }
   }

   return { board, handlePieceClick, handleSquareClick };
};

export default useChessLogic;
