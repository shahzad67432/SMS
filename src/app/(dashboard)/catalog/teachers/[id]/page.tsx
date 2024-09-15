import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import { User, Mail, Phone, Calendar, Droplet, School, BookOpen, Users } from "lucide-react"; // Use lucide-react icons

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-6 xl:flex-row">
      <div className="w-full xl:w-2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          <Performance />
          <div className="flex-1 flex gap-4 flex-wrap">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] shadow-sm">
              <Users className="text-blue-600 w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-500">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] shadow-sm">
              <School className="text-yellow-500 w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-500">Branches</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] shadow-sm">
              <BookOpen className="text-green-600 w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-500">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] shadow-sm">
              <Users className="text-red-600 w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-500">Classes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-md p-6 shadow-md">
          <div className="bg-gray-100 py-6 px-4 rounded-md flex gap-6">
            <div className="w-36 h-36">
              <User className="text-gray-600 w-full h-full" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold">Leonard Snyder</h1>
                {role === "admin" && (
                  <FormModal
                    table="teacher"
                    type="update"
                    data={{
                      id: 1,
                      username: "deanguerrero",
                      email: "deanguerrero@gmail.com",
                      password: "password",
                      firstName: "Dean",
                      lastName: "Guerrero",
                      phone: "+1 234 567 89",
                      address: "1234 Main St, Anytown, USA",
                      bloodType: "A+",
                      dateOfBirth: "2000-01-01",
                      sex: "male",
                      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    }}
                  />
                )}
              </div>
              <p className="text-gray-500">
                Experienced teacher with a focus on modern teaching methodologies and student success.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Droplet className="text-blue-500" />
                  <span>A+</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-green-500" />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-red-500" />
                  <span>user@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-yellow-500" />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
