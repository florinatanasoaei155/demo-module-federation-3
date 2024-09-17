import React from "react";
import { useLoaderData } from "react-router-dom";
import { Stat } from "../types";

const Dashboard: React.FC = () => {
  const stats = useLoaderData() as Stat[];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats?.map((item, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">{item.name}</h3>
            <p className="mt-2 text-gray-600">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
