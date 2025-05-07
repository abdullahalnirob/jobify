import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FiMenu, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user, signOutUser } = React.useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Signout successfully!");
        navigate("/auth/login");
      })
      .catch(() => {
        toast.error("Signout failed. Please try again.");
      });
  };

  const navbarVariants = {
    initial: { backgroundColor: "rgba(23, 29, 34, 1)" },
    scrolled: {
      backgroundColor: "rgba(23, 29, 34, 0.9)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, when: "afterChildren" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const logoVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 w-full"
      variants={navbarVariants}
      initial="initial"
      animate={scrolled ? "scrolled" : "initial"}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center text-2xl font-bold text-white"
            variants={logoVariants}
            whileHover="hover"
          >
            <span className="text-green-500 mr-1">Job</span>ify
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              <motion.div
                className="flex items-center gap-3 bg-slate-700/70 text-white px-4 py-1.5 text-sm rounded-full backdrop-blur-sm"
                whileHover={{ backgroundColor: "rgba(51, 65, 85, 0.9)" }}
              >
                {user?.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="h-8 w-8 rounded-full object-cover border border-gray-600"
                  />
                )}

                <span>{user.displayName}</span>
              </motion.div>
            ) : (
              <motion.div
                className="flex items-center gap-3 bg-slate-700/70 text-white px-4 py-1.5 text-sm rounded-full backdrop-blur-sm"
                whileHover={{ backgroundColor: "rgba(51, 65, 85, 0.9)" }}
              >
                Loading...
              </motion.div>
            )}

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/"
                className="text-white hover:text-green-500 duration-200"
              >
                Home
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/profile"
                className="text-white hover:text-green-500 duration-200"
              >
                My Profile
              </Link>
            </motion.div>

            <motion.button
              onClick={handleSignOut}
              className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 cursor-pointer duration-200"
              whileHover={{ scale: 1.05, backgroundColor: "#15803d" }}
              whileTap={{ scale: 0.95 }}
            >
              Log out
            </motion.button>
          </div>
          <div className="md:hidden">
            <div className="flex items-center space-x-3 md:block md:items">
              <div className="md:hidden">
                {user?.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="h-8 w-8 rounded-full object-cover border border-gray-600"
                  />
                )}
              </div>
              <motion.button
                onClick={toggleMenu}
                className="md:hidden text-white text-2xl p-2"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-4 pb-4 space-y-4 bg-[#171d22]/95 backdrop-blur-sm"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {user && (
              <motion.div
                variants={menuItemVariants}
                className="flex items-center gap-3 bg-slate-700/70 text-white px-4 py-2 rounded-full mt-2 backdrop-blur-sm"
              >
                <img
                  src={user.photoURL}
                  alt="User"
                  className="h-8 w-8 rounded-full object-cover border border-gray-600"
                />
                <span>{user.email}</span>
              </motion.div>
            )}

            <motion.div variants={menuItemVariants}>
              <Link
                to="/"
                className="block text-white hover:text-green-500 duration-200 py-2"
              >
                Home
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link
                to="/profile"
                className="block text-white hover:text-green-500 duration-200 py-2"
              >
                My Profile
              </Link>
            </motion.div>

            <motion.button
              variants={menuItemVariants}
              onClick={handleSignOut}
              className="w-full py-3 cursor-pointer rounded-full bg-green-600 text-white hover:bg-green-700 duration-200"
              whileTap={{ scale: 0.95 }}
            >
              Log out
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
