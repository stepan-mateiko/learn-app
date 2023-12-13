interface TableProps {
  title: string;
  headings: string[];
  data: any[][];
}

const Table: React.FC<TableProps> = ({ title, headings, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th colSpan={headings.length}>{title}</th>
        </tr>
        <tr>
          {headings.map((heading, index) => (
            <th key={index}>{heading}</th>
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
