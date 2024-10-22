import React from "react";

interface MonthlyBudget {
  month: string;
  amount: number;
  forecast: number;
}

interface TableData {
  budget: number;
  forecast: number;
  totalBudget: number;
  monthlyBudget: MonthlyBudget[];
  category: string;
  expenseType: string;
}

interface ProcurementTableProps {
  tableData: TableData[]; // Expecting an array of TableData
}

const ProcurementTable: React.FC<ProcurementTableProps> = ({ tableData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="font-semibold text-lg">Budget and Procurement Details</h2>
      <table className="min-w-full mt-2 border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th rowSpan={2} className="border border-gray-300 p-2">
              Cost Category
            </th>
            <th rowSpan={2} className="border border-gray-300 p-2">
              Expense Type
            </th>
            <th rowSpan={2} className="border border-gray-300 p-2">
              Totals
            </th>
            {/* Month Headers */}
            {tableData.length > 0 &&
              tableData[0].monthlyBudget.map((budgetItem, index) => (
                <th
                  key={index}
                  colSpan={2}
                  className="border border-gray-300 p-2 text-center"
                >
                  {budgetItem.month}
                </th>
              ))}
          </tr>
          <tr className="bg-gray-100">
            {/* Budget and Forecast Headers */}
            {tableData.length > 0 &&
              tableData[0].monthlyBudget.map((_, index) => (
                <React.Fragment key={index}>
                  <th className="border border-gray-300 p-2">Budget</th>
                  <th className="border border-gray-300 p-2">Forecast</th>
                </React.Fragment>
              ))}
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((data, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{data.category}</td>
                <td className="border border-gray-300 p-2">
                  {data.expenseType}
                </td>
                <td className="border border-gray-300 p-2">
                  ₱{data.totalBudget}
                </td>
                {/* Iterate through monthly budget data */}
                {data.monthlyBudget.map((budgetItem, index) => (
                  <React.Fragment key={index}>
                    <td className="border border-gray-300 p-2">
                      ₱{budgetItem.amount}
                    </td>
                    <td className="border border-gray-300 p-2">
                      ₱{budgetItem.forecast}
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={9}
                className="border border-gray-300 p-2 text-center"
              >
                No monthly budget available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export { ProcurementTable };
