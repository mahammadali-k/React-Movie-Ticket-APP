import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from "lucide-react"
import React from "react"
import { NavLink } from "react-router-dom"
import { assets } from "../../assets/assets"

const AdminSidebar = () => {
  const user = {
    firstName: "Admin",
    lastName: "User",
    imageUrl: assets.profile,
  }

  const adminNavlinks = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboardIcon },
    { name: "Add Shows", path: "/admin/add-shows", icon: PlusSquareIcon },
    { name: "List Shows", path: "/admin/list-shows", icon: ListIcon },
    { name: "List Bookings", path: "/admin/list-bookings", icon: ListCollapseIcon },
  ]

  return (
    <div className="h-screen bg-gray-100 border-r border-gray-300/20">
      <div className="p-4 flex justify-center">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={user.imageUrl}
          alt="sidebar"
        />
      </div>
      <p className="text-lg font-bold text-gray-600 text-center mb-4">
        {user.firstName} {user.lastName}
      </p>
      <div className="flex-1 overflow-y-auto">
        <ul>
          {adminNavlinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center py-2 px-4 text-gray-600 hover:bg-gray-200 ${
                    isActive ? "bg-gray-200" : ""
                  }`
                }
              >
                <link.icon className="w-5 h-5 mr-2" />
                <span className="text-sm">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AdminSidebar