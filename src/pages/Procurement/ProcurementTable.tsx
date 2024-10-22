import React from "react";

interface Procurement {
  category: string;
  expenseType: string;
  cost: number;
}

interface MonthlyBudget {
  month: string;
  amount: number;
  forecast: number;
}

interface ProcurementTableProps {
  project: {
    procurement: Procurement[];
    monthlyBudget: MonthlyBudget[];
    budget: number;
  };
}

const ProcurementTable: React.FC<ProcurementTableProps> = ({ project }) => {
  const { procurement = [], monthlyBudget = [], budget } = project;

  // Calculate total procurement cost
  const totalProcurementCost = procurement.reduce(
    (total, item) => total + item.cost,
    0
  );

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
            {monthlyBudget.map((budgetItem, index) => (
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
            {monthlyBudget.map((_, index) => (
              <React.Fragment key={index}>
                <th className="border border-gray-300 p-2">Budget</th>
                <th className="border border-gray-300 p-2">Forecast</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthlyBudget.length > 0 ? (
            <tr>
              <td className="border border-gray-300 p-2">
                {procurement.length > 0 ? procurement[0].category : "N/A"}
              </td>
              <td className="border border-gray-300 p-2">
                {procurement.length > 0 ? procurement[0].expenseType : "N/A"}
              </td>
              <td className="border border-gray-300 p-2">
                ${totalProcurementCost}
              </td>
              {/* Iterate through monthly budget data */}
              {monthlyBudget.map((budgetItem, index) => (
                <React.Fragment key={index}>
                  <td className="border border-gray-300 p-2">
                    ${budgetItem.amount}
                  </td>
                  <td className="border border-gray-300 p-2">
                    ${budgetItem.forecast}
                  </td>
                </React.Fragment>
              ))}
            </tr>
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
