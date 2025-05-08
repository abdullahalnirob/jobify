import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import {
  CalendarIcon,
  Mail,
  Phone,
  Shield,
  Clock,
  Edit,
  X,
  Check,
} from "lucide-react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user?.displayName || "");
  const [newPhotoURL, setNewPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = () => {
    updateUser({ ...user, displayName: newName, photoURL: newPhotoURL })
      .then(() => {
        toast.success("Profile updated successfully!");
        setIsEditing(false);
      })
      .catch((err) => {
        toast.error("Failed to update profile!");
        console.error(err);
      });
  };

  const handleCancel = () => {
    setNewName(user?.displayName || "");
    setNewPhotoURL(user?.photoURL || "");
    setIsEditing(false);
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-slate-900 to-slate-800 text-white flex justify-center items-center p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Your Profile | Jobify</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full max-w-4xl transition-all duration-300 ease-in-out">
        <div className="border border-slate-700 bg-slate-800/40 backdrop-blur-md shadow-xl overflow-hidden rounded-xl flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-gradient-to-br from-slate-800 to-slate-900 border-r border-slate-700/50 p-6 flex flex-col items-center justify-center relative">
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full"></div>
              <img
                src={user?.photoURL || "/placeholder.svg"}
                alt="User"
                className="w-28 h-28 rounded-full object-cover border-4 border-slate-800 bg-slate-700 relative z-10"
              />
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-800 z-20"></div>
            </div>

            <h2 className="text-xl font-bold text-white text-center">
              {user?.displayName || "No Name"}
            </h2>
            <div className="flex items-center justify-center gap-1 mt-1">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <p className="text-sm text-slate-300">
                {user?.email || "No Email"}
              </p>
            </div>

            <div className="mt-4 w-full">
              <div className="h-px bg-slate-700/50 my-4"></div>
              <div className="text-center">
                <span className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-emerald-400 border border-emerald-500/30 inline-block">
                  Active
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                <h3 className="text-sm font-medium text-slate-300 mb-3 flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-emerald-400" />
                  Account Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="w-28 text-slate-400">User ID</div>
                    <div className="flex-1 text-white font-mono text-xs bg-slate-700/50 p-1.5 rounded overflow-x-auto">
                      {user?.uid || "Not available"}
                    </div>
                  </div>

                  {user?.phoneNumber && (
                    <div className="flex items-center">
                      <div className="w-28 text-slate-400">Phone</div>
                      <div className="flex items-center">
                        <Phone className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                        <span>{user.phoneNumber}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {user?.metadata && (
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <h3 className="text-sm font-medium text-slate-300 mb-3 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-emerald-400" />
                    Activity
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-28 text-slate-400">Created</div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                        <span>
                          {new Date(
                            user.metadata.creationTime
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-28 text-slate-400">Last Sign-in</div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                        <span>
                          {new Date(
                            user.metadata.lastSignInTime
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4 relative overflow-hidden">
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isEditing
                    ? "opacity-0 transform translate-y-2 pointer-events-none h-0"
                    : "opacity-100 h-10"
                }`}
              >
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-md border border-emerald-500/30 text-sm hover:bg-emerald-500/30 transition-colors"
                >
                  <Edit className="w-3.5 h-3.5" />
                  Update Profile
                </button>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isEditing
                    ? "opacity-100 max-h-96 transform translate-y-0"
                    : "opacity-0 max-h-0 transform -translate-y-4 pointer-events-none"
                }`}
              >
                <div className="w-full space-y-3 origin-top">
                  <div className="space-y-2">
                    <label className="text-xs text-slate-400">
                      Display Name
                    </label>
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-slate-400">Photo URL</label>
                    <input
                      type="text"
                      value={newPhotoURL}
                      onChange={(e) => setNewPhotoURL(e.target.value)}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter photo URL"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={handleUpdate}
                      className="flex-1 cursor-pointer flex items-center justify-center gap-1 px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-md border border-emerald-500/30 text-sm hover:bg-emerald-500/30 transition-colors"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex-1 cursor-pointer flex items-center justify-center gap-1 px-3 py-1.5 bg-red-500/20 text-red-400 rounded-md border border-red-500/30 text-sm hover:bg-red-500/30 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
