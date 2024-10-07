import { TableProps } from "../../constants/props";

const Table: React.FC<TableProps> = ({ title, headings, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th colSpan={headings.length} className="table__title">
            {title}
          </th>
        </tr>
        <tr className="table__heading-line">
          {headings.map((heading, index) => (
            <th key={index} className="table__heading">
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
