'use client'
import React, { useState } from "react";
import { FaLinkedin, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";
import Link from "next/link";
import Button from "../components/common/button";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import Modal from "../components/common/Modal";
import Container from "../components/common/container";

const ContactPageForm = () => {
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
      .finally(() => setLoading(false));
  };

  const handleScheduleMeeting = () => {
    router.push("/meeting/azmir");
  };

  return (
    <div className="min-h-screen py-16 mt-12">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 dark:text-white">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-white/100">
            Ready to start your next project? Get in touch and let's make
            something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Social Links - Left Side */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 dark:bg-gray-800/40 dark:backdrop-blur-md dark:border-white/10">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 dark:text-white">
                  Connect via Social
                </h2>

                <div className="space-y-4">
                  <Link
                    href="https://www.linkedin.com/in/azmiruddinalif/"
                    target="_blank"
                    className="group flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-white/20 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
                  >
                    <div className="p-3 bg-blue-100 group-hover:bg-blue-500 rounded-xl transition-colors duration-300">
                      <FaLinkedin className="text-blue-600 group-hover:text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 dark:text-white">
                        LinkedIn
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-white-300/50 dark:group-hover:text-black-400">
                        Professional network
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="https://www.facebook.com/Azmir02"
                    target="_blank"
                    className="group flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-white/20 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300"
                  >
                    <div className="p-3 bg-blue-100 group-hover:bg-blue-600 rounded-xl transition-colors duration-300">
                      <FaFacebookF className="text-blue-700 group-hover:text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 dark:text-white">
                        Facebook
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-white-300/50 dark:group-hover:text-black-400">
                        Social connection
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="https://wa.me/+8801849702157"
                    target="_blank"
                    className="group flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-white/20 hover:border-green-500 hover:bg-green-50 transition-all duration-300"
                  >
                    <div className="p-3 bg-green-100 group-hover:bg-green-500 rounded-xl transition-colors duration-300">
                      <FaWhatsapp className="text-green-600 group-hover:text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-green-600 dark:text-white">
                        WhatsApp
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-white-300/50 dark:group-hover:text-black-400">
                        Quick messaging
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Quick Info */}
                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/20">
                  <h3 className="font-semibold text-gray-800 mb-4 dark:text-white">
                    Quick Response
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-white/70">
                    <p>📧 Email response: Within 24 hours</p>
                    <p>💬 WhatsApp: Usually within 2 hours</p>
                    <p>📞 Meeting: Available for scheduling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-white/10 dark:bg-gray-800/40 dark:backdrop-blur-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 dark:text-white">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <HiOutlineUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl 
             focus:ring-2 dark:border-white/20 focus:ring-blue-500 
             focus:border-transparent outline-none transition-all duration-300
             text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white"
                        required
                      />
                    </div>
                    <div className="relative">
                      <HiOutlineUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl 
             focus:ring-2 dark:border-white/20 focus:ring-blue-500 
             focus:border-transparent outline-none transition-all duration-300
             text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <HiOutlineMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl 
             focus:ring-2 dark:border-white/20 focus:ring-blue-500 
             focus:border-transparent outline-none transition-all duration-300
             text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <HiOutlinePhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl 
                      focus:ring-2 dark:border-white/20 focus:ring-blue-500 
                      focus:border-transparent outline-none transition-all duration-300
                      text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white"
                      required
                    />
                  </div>

                  {/* Profile */}
                  <div className="relative">
                    <FaLinkedin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="profile"
                      placeholder="Facebook or LinkedIn Profile URL"
                      value={formData.profile}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl 
                      focus:ring-2 dark:border-white/20 focus:ring-blue-500 
                      focus:border-transparent outline-none transition-all duration-300
                      text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <textarea
                      name="description"
                      placeholder="Tell me about your project... What are your goals, timeline, and requirements?"
                      value={formData.description}
                      onChange={handleChange}
                      rows="5"
                      className="w-full p-4 border border-gray-200 rounded-xl 
                      focus:ring-2 focus:ring-blue-500 dark:border-white/20 
                      focus:border-transparent outline-none transition-all duration-300 resize-none
                      text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white"
                      required
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`flex-1 text-white bg-orange font-semibold py-4 px-8 rounded-xl border border-orange hover:bg-transparent hover:text-orange transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer ${
                        loading ? "cursor-not-allowed opacity-70" : ""
                      }`}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
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
                        "Send Message"
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleScheduleMeeting}
                      className="flex-1 text-orange bg-transparent font-semibold py-4 px-8 rounded-xl border border-orange hover:bg-orange hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      Schedule Meeting
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
}

export default ContactPageForm