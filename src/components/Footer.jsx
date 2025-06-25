"use client";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      color: "#22c55e",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.footer
      className="bg-[#171d22] text-white pt-12 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <motion.div
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center text-3xl font-bold mb-4"
              variants={logoVariants}
              whileHover="hover"
            >
              <span className="text-green-500 mr-1">Job</span>ify
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              Connecting talented professionals with their dream careers. Find
              your next opportunity with Jobify.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white text-xl"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white text-xl"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FiTwitter />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white text-xl"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href="mailto:contact@jobify.com"
                className="text-gray-400 hover:text-white text-xl"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FiMail />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-green-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-green-500 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="text-gray-400 hover:text-green-500 transition duration-200"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-gray-400 hover:text-green-500 transition duration-200"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-green-500 transition duration-200"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-green-500">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/help"
                  className="text-gray-400 hover:text-green-500 transition duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-green-500 transition duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-green-500 transition duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-green-500 transition duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm"
          variants={itemVariants}
        >
          <p>© {currentYear} Jobify. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
