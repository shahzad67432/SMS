"use client"
import { Home, User, Book, Users, Calendar, FileText, BarChart, MessageCircle, Bell, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// Mapping roles to icons
const icons = {
  Home: Home,
  Teachers: Users,
  Students: Users,
  Parents: User,
  Subjects: Book,
  Classes: Book,
  Lessons: Book,
  Exams: FileText,
  Assignments: FileText,
  Results: BarChart,
  Events: Calendar,
  Messages: MessageCircle,
  Announcements: Bell,
  Profile: User,
  Settings: Settings,
  Logout: LogOut
};

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "Home", label: "Home", href: "/admin", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "Teachers", label: "Teachers", href: "/catalog/teachers", visible: ["admin", "teacher"] },
      { icon: "Students", label: "Students", href: "/catalog/students", visible: ["admin", "teacher"] },
      { icon: "Parents", label: "Parents", href: "/catalog/parents", visible: ["admin", "teacher"] },
      { icon: "Subjects", label: "Subjects", href: "/catalog/subjects", visible: ["admin"] },
      { icon: "Classes", label: "Classes", href: "/catalog/classes", visible: ["admin", "teacher"] },
      { icon: "Lessons", label: "Lessons", href: "/catalog/lessons", visible: ["admin", "teacher"] },
      { icon: "Exams", label: "Exams", href: "/catalog/exams", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "Assignments", label: "Assignments", href: "/catalog/assignments", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "Results", label: "Results", href: "/catalog/results", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "Events", label: "Events", href: "/catalog/events", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "Messages", label: "Messages", href: "/catalog/messages", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "Announcements", label: "Announcements", href: "/catalog/announcements", visible: ["admin", "teacher", "student", "parent"] },
    ],       
  },
  // {
  //   title: "OTHER",
  //   items: [
  //     { icon: "Profile", label: "Profile", href: "/profile", visible: ["admin", "teacher", "student", "parent"] },
  //     { icon: "Settings", label: "Settings", href: "/settings", visible: ["admin", "teacher", "student", "parent"] },
  //     { icon: "Logout", label: "Logout", href: "/logout", visible: ["admin", "teacher", "student", "parent"] },
  //   ],
  // },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="mt-4 text-sm text-white">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-[#E0E0E0] font-light my-4">
            {section.title}
          </span>
          {section.items.map((item) => {
            if (item.visible) {
              const IconComponent = icons[item.icon];
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={`flex items-center justify-center lg:justify-start gap-4 text-[#E0E0E0] py-2 md:px-2 rounded-md hover:bg-[#4A90E2] ${pathname === item.href ? 'bg-[#4A90E2] text-white' : ''}`}
                >
                  <IconComponent size={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
