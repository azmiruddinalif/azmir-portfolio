"use client";
import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Modal = ({ isOpen, type, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 flex flex-col items-center gap-4 w-11/12 max-w-sm">
        {type === "success" ? (
          <FaCheckCircle className="text-green-500 text-6xl" />
        ) : (
          <FaTimesCircle className="text-red-500 text-6xl" />
        )}
        <p className="text-center text-lg font-semibold">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
