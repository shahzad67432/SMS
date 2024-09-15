import { MessageCircle, Bell, User } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-[#1f1f1f]'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 bg-[#2c2c2c]'>
        <MessageCircle size={14} className="text-gray-400" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-[200px] p-2 bg-transparent outline-none text-white placeholder-gray-400"
        />
      </div>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <MessageCircle size={20} className="text-black" />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Bell size={20} className="text-black" />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className="text-xs leading-3 font-medium text-white">M. Shahzad</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="User Avatar" width={36} height={36} className="rounded-full" />
      </div>
    </div>
  )
}

export default Navbar;
