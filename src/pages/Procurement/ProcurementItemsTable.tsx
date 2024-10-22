import React from "react";

interface Procurement {
  id: string;
  item: string;
  cost: number;
  date: string;
  status: string;
}

interface ProcurementItemsTableProps {
  procurement: Procurement[];
}

const ProcurementItemsTable: React.FC<ProcurementItemsTableProps> = ({
  procurement,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="font-semibold text-lg">Procurement Items</h2>
      <table className="min-w-full mt-2 border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Item</th>
            <th className="border border-gray-300 p-2">Cost</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {procurement.length > 0 ? (
            procurement.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2">{item.item}</td>
                <td className="border border-gray-300 p-2">${item.cost}</td>
                <td className="border border-gray-300 p-2">{item.date}</td>
                <td className="border border-gray-300 p-2">{item.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="border border-gray-300 p-2 text-center"
              >
                No procurement items available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export { ProcurementItemsTable };
