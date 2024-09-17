import React from "react";
import { Route, Routes } from "react-router-dom";
import ReportList from "./report-list";
import EditReport from "./edit-report";

const reportsLoader = async () => {
  const res = await fetch("/api/dashboard/reports.json");
  if (!res.ok) throw new Error("Failed to fetch reports data");
  return res.json();
};

const ReportDesigner: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ReportList />} loader={reportsLoader} index />
      <Route path="edit/:id" element={<EditReport />} id="edit-report" />
    </Routes>
  );
};

export default ReportDesigner;
