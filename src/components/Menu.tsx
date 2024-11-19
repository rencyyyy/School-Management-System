import Link from 'next/link';
import Image from 'next/image';
import { role } from '@/lib/data';

// MENU ITEMS
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "professor", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "professor"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "professor"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "professor"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/classes.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "professor"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "professor"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "professor", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "professor", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "professor", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "professor", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "professor", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "professor", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "professor", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "professor", "student", "parent"],
      },
      {
        icon: "/settings.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "professor", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "professor", "student", "parent"],
      },
    ],
  },
];

const Menu =() => {
  return(
    <div className="mt-4 text-sm">
      {menuItems.map(i=>(
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-primary font-light my-4">{i.title}</span>
          {i.items.map(item=> {
            if(item.visible.includes(role)) {
              return(
                <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-secondary py-2 md:px-2 rounded-lg hover:bg-darkRed">
                  <Image src={item.icon} alt="" width={23} height={23} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              )
            }
          })}
        </div>
      ))}
    </div>
  )
}

export default Menu