import { teachersData } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  // const router = useRouter()
  return (
      <table className="w-full mt-4 bg-gray-800 text-white rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="text-left text-gray-400 text-sm bg-gray-700">
            {columns.map((col) => (
              <th key={col.accessor} className={col.className}>{col.header}</th>
            ))}
          </tr>
        </thead>
        { data === teachersData &&
          <tbody className="cursor-pointer" >{data.map((item) =>  renderRow(item) )}</tbody>
        }
        <tbody>{data.map((item) => renderRow(item))}</tbody>
      </table>
  );
};

export default Table;
