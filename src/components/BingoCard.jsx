import { FaMosque } from "react-icons/fa6";

import "./BingoCard.css";
const BingoCard = () => {
  const rows = Array(5).fill(0); // Create 5 rows
  const cells = Array(5).fill(0); // Each row has 5 cells
  return (
    <div className="bingo-card">
      <div className="bingo-card-header">
        <h1>Jumuah Bingo</h1>
      </div>
      <div className="bingo-card-body">
        {rows.map((_, rowIndex) => (
          <div className="bingo-card-body-row" key={rowIndex}>
            {cells.map((_, cellIndex) => (
              <div className="bingo-card-body-cell" key={cellIndex}>
                <FaMosque size={50} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default BingoCard;
