interface TableData {
  headers: string[];
  rows: string[][];
}

export default function Table({ data }: { data: TableData }) {
  return (
    // overflow-x-auto is CRITICAL for your 7-column table on mobile
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-150">
        {/* Table Header */}
        <thead className="bg-surface">
          <tr>
            {data.headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-sm font-bold border uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-border">
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-surface transition-colors">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-3 text-sm border ${
                    cellIndex === 0 ? "font-semibold" : "" // Make first column bold
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
