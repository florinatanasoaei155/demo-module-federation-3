import React from "react";
import { useLoaderData } from "react-router-dom";

interface ContactData {
  contactName: string;
  contactEmail: string;
  message: string;
}

const Contact: React.FC = () => {
  const data = useLoaderData() as ContactData;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
      <div className="mt-6">
        <p className="text-gray-700">Name: {data.contactName}</p>
        <p className="text-gray-700">Email: {data.contactEmail}</p>
        <p className="text-gray-700">Message: {data.message}</p>
      </div>
    </div>
  );
};

export default Contact;
