// Chessboard.js
import React from "react";
import "./Chessboard.css";
import useChessLogic from "./ChessLogic"; // Import the custom hook
import bPawn from "./images/bP.png";
import bRook from "./images/bR.png";
import bKnight from "./images/bN.png";
import bBishop from "./images/bB.png";
import bQueen from "./images/bQ.png";
import bKing from "./images/bK.png";
import wPawn from "./images/wP.png";
import wRook from "./images/wR.png";
import wKnight from "./images/wN.png";
import wBishop from "./images/wB.png";
import wQueen from "./images/wQ.png";
import wKing from "./images/wK.png";

const Chessboard = () => {
   const { board, handlePieceClick, handleSquareClick } = useChessLogic(
      initializeBoard()
   );

   function initializeBoard() {
      const rows = [];
      for (let i = 0; i < 8; i++) {
         const row = [];
         for (let j = 0; j < 8; j++) {
            row.push({
               piece: null,
            });
         }
         rows.push(row);
      }

      // Place black pieces
      rows[0][0].piece = (
         <img src={bRook} alt="Black Rook" className="chess-piece" />
      );
      rows[0][1].piece = (
         <img src={bKnight} alt="Black Knight" className="chess-piece" />
      );
      rows[0][2].piece = (
         <img src={bBishop} alt="Black Bishop" className="chess-piece" />
      );
      rows[0][3].piece = (
         <img src={bQueen} alt="Black Queen" className="chess-piece" />
      );
      rows[0][4].piece = (
         <img src={bKing} alt="Black King" className="chess-piece" />
      );
      rows[0][5].piece = (
         <img src={bBishop} alt="Black Bishop" className="chess-piece" />
      );
      rows[0][6].piece = (
         <img src={bKnight} alt="Black Knight" className="chess-piece" />
      );
      rows[0][7].piece = (
         <img src={bRook} alt="Black Rook" className="chess-piece" />
      );
      for (let i = 0; i < 8; i++) {
         rows[1][i].piece = (
            <img src={bPawn} alt="Black Pawn" className="chess-piece" />
         );
      }

      // Place white pieces
      rows[7][0].piece = (
         <img src={wRook} alt="White Rook" className="chess-piece" />
      );
      rows[7][1].piece = (
         <img src={wKnight} alt="White Knight" className="chess-piece" />
      );
      rows[7][2].piece = (
         <img src={wBishop} alt="White Bishop" className="chess-piece" />
      );
      rows[7][3].piece = (
         <img src={wQueen} alt="White Queen" className="chess-piece" />
      );
      rows[7][4].piece = (
         <img src={wKing} alt="White King" className="chess-piece" />
      );
      rows[7][5].piece = (
         <img src={wBishop} alt="White Bishop" className="chess-piece" />
      );
      rows[7][6].piece = (
         <img src={wKnight} alt="White Knight" className="chess-piece" />
      );
      rows[7][7].piece = (
         <img src={wRook} alt="White Rook" className="chess-piece" />
      );
      for (let i = 0; i < 8; i++) {
         rows[6][i].piece = (
            <img src={wPawn} alt="White Pawn" className="chess-piece" />
         );
      }

      return rows;
   }

   function renderBoard() {
      return board.map((row, rowIndex) => (
         <div key={rowIndex} className="board-row">
            {row.map((square, colIndex) => (
               <div
                  key={colIndex}
                  className="board-square"
                  onClick={() => handleSquareClick(rowIndex, colIndex)} // Call handleSquareClick for squares
               >
                  {/* Attach onClick to pieces if piece exists */}
                  {square.piece && (
                     <div
                        className="chess-piece"
                        onClick={() => handlePieceClick(rowIndex, colIndex)} // Call handlePieceClick for pieces
                     >
                        {square.piece}
                     </div>
                  )}
               </div>
            ))}
         </div>
      ));
   }

   return <div className="chessboard">{renderBoard()}</div>;
};

export default Chessboard;
