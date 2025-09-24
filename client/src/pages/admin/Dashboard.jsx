import {
  ChartLineIcon,
  CircleDollarSignIcon,
  Loader,
  PlayCircleIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { useState } from "react";
import { dummyDashboardData } from "../../assets/assets";
import { useEffect } from "react";
import Title from "../../components/admin/Title";
import BlurCircle from "../../components/BlurCircle";
import { dateFormat } from "../../lib/dateFormat";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });

  const [loading, setLoading] = useState(true);

  const dashboardCards = [
    {
      title: "Total Bookings",
      value: dashboardData.totalBookings || "0",
      icon: ChartLineIcon,
    },
    {
      title: "Total Revenue",
      value: "$" + dashboardData.totalRevenue || "0",
      icon: CircleDollarSignIcon,
    },
    {
      title: "Active Shows",
      value: dashboardData.activeShows.length || "0",
      icon: PlayCircleIcon,
    },
    {
      title: "Total Users",
      value: dashboardData.totalUser || "0",
      icon: UserIcon,
    },
  ];

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
    setLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return !loading ? (
    <>
      <Title text1="Admin" text2="Dashboard" />

      <div className="relative flex flex-wrap gap-4 mt-6">
        <BlurCircle top="-100px" left="0px" />
        <div className="flex flex-wrap gap-4 w-full">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 bg-gray-600 border border-primary/20 rounded-md max-w-50 w-full"
            >
              <div>
                <h1 className="text-sm">{card.title}</h1>
                <p className="text-xl font-medium mt-1">{card.value}</p>
              </div>

              <card.icon className="w-6 h-6" />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-lg font-medium"> Active Shows </p>

      <div className="relative flex flex-wrap gap-6 mt-4 max-w-5xl">
        {dashboardData.activeShows.map((show) => (
          <div
            key={show._id}
            className="w-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <img
              src={show.movie.poster_path}
              alt=""
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{show.movie.title}</h2>
              <p className="text-sm text-gray-400">{dateFormat(show.showDateTime)}</p>
              <p className="text-lg font-medium mt-2">${show.showPrice}</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-200">
                  <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  {show.movie.vote_average.toFixed(1)}
                </p>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Dashboard;