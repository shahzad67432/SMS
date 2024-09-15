import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-[#1E1E1E] even:bg-[#2A2A2A] p-6 flex-1 min-w-[150px]">
      <div className="flex justify-between items-start">
        <span className="text-[12px] bg-[#4A90E2] px-3 py-1 rounded-full text-[#E0E0E0]">
          2024/25
        </span>
        <Image src="/more.png" alt="more options" width={24} height={24} />
      </div>
      <h1 className="text-3xl font-bold my-4 text-[#E0E0E0]">1,567</h1>
      <h2 className="capitalize text-md font-medium text-[#B0B0B0]">{type}s</h2>
    </div>
  );
};

export default UserCard;
