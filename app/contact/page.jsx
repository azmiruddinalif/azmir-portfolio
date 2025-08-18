"use client";
import React, { useState } from "react";
import { FaLinkedin, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Button from "../components/common/button";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import Modal from "../components/common/Modal";
import Container from "../components/common/container";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
    profile: "",
  });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, type: "", message: "" });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidProfile = (url) => {
    const fbRegex = /^https?:\/\/(www\.)?facebook\.com\/[A-Za-z0-9\.]+\/?$/i;
    const linkedinRegex =
      /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9\-_]+\/?$/i;
    return fbRegex.test(url) || linkedinRegex.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidProfile(formData.profile)) {
      setModal({
        isOpen: true,
        type: "error",
        message: "Please enter a valid Facebook or LinkedIn profile link.",
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (response) => {
          setModal({
            isOpen: true,
            type: "success",
            message: "Email sent successfully!",
          });
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            description: "",
            profile: "",
          });
        },
        (err) => {
          setModal({
            isOpen: true,
            type: "error",
            message: "Oops! Email could not be sent. Please try again.",
          });
        }
      )
      .finally(() => setLoading(false)); // stop loading
  };

  const handleScheduleMeeting = () => {
    router.push("/meeting/azmir");
  };

  return (
    <div className="flex justify-center my-36">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Contact via Social Platform</h2>
            <Link
              href="https://www.linkedin.com/in/azmiruddinalif/"
              target="_blank"
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              <FaLinkedin size={24} /> LinkedIn
            </Link>
            <Link
              href="https://www.facebook.com/Azmir02"
              target="_blank"
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-blue-800 hover:text-white transition-all"
            >
              <FaFacebookF size={24} /> Facebook
            </Link>
            <Link
              href="https://wa.me/+8801849702157"
              target="_blank"
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-green-500 hover:text-white transition-all"
            >
              <FaWhatsapp size={24} /> WhatsApp
            </Link>
          </div>

          {/* Right Side */}
          <div className="lg:w-2/3 w-full rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Manual Contact</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="flex-1 p-3 border rounded"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="flex-1 p-3 border rounded"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border rounded"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 border rounded"
                required
              />
              <input
                type="text"
                name="profile"
                placeholder="Facebook or LinkedIn Profile"
                value={formData.profile}
                onChange={handleChange}
                className="p-3 border rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Project Details / Description"
                value={formData.description}
                onChange={handleChange}
                className="p-3 border rounded h-32"
                required
              />
              <div className="flex flex-col lg:flex-row gap-4 mt-4">
                <Button
                  text={
                    loading ? (
                      <div className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Submit"
                    )
                  }
                  type="submit"
                  disabled={loading}
                  className={`text-white bg-black font-primary font-semibold py-3 px-6 border border-black-100 hover:bg-transparent hover:text-black transition-all ease-linear duration-100 ${
                    loading ? "cursor-not-allowed opacity-70" : ""
                  }`}
                />
                <Button
                  text="Schedule a Meeting"
                  type="button"
                  onClick={handleScheduleMeeting}
                  className="text-black-100 bg-white font-primary font-semibold py-3 px-6 border border-black-100 hover:bg-black hover:text-white transition-all ease-linear duration-100"
                />
              </div>
            </form>
          </div>
        </div>
      </Container>

      {/* Modal */}
      <Modal
        isOpen={modal.isOpen}
        type={modal.type}
        message={modal.message}
        onClose={() => setModal({ ...modal, isOpen: false })}
      />
    </div>
  );
};

export default Contact;
