import React, { useEffect, useState } from "react";
import type { Report } from "../types";
import PencilIcon from "../icons/pencil";
import { useNavigate } from "react-router-dom";

const fetchReports = async () => {
  const res = await fetch("/api/dashboard/reports.json");
  if (!res.ok) throw new Error("Failed to fetch reports data");
  return res.json();
};

const ReportList: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getReports = async () => {
      const result = await fetchReports();
      setReports(result);
    };

    getReports();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Reports</h2>
      <ul>
        {reports.map((report) => (
          <li
            key={report.id}
            className="border-b border-gray-200 py-4 last:border-b-0 flex justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                {report.title}
              </h3>
              <p className="text-gray-500">
                Date: {new Date(report.date).toLocaleDateString()}
              </p>
              <p className="mt-2 text-gray-600">{report.summary}</p>
            </div>
            <button onClick={() => navigate(`/reports/edit/${report.id}`)}>
              <PencilIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
