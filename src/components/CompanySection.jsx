"use client";

import { useState, useEffect } from "react";
import { Briefcase, Globe, MapPin, Building, ExternalLink } from "lucide-react";
import { toast } from "react-toastify";

const CompanySection = () => {
  const [companiesData, setCompaniesData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    fetch("/jobData.json")
      .then((response) => response.json())
      .then((data) => setCompaniesData(data))
      .catch((error) => console.error("Error fetching job data:", error));
  }, []);

  const openModal = (company) => {
    setSelectedCompany(company);
    document.getElementById("company_modal").showModal();
  };
  const handleApply = () => {
    toast.success("Apply Successful!");
    document.getElementById("company_modal").close();
  };

  return (
    <section className="py-12 bg-[#0f1316] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" id="jobs">
          Top Companies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
          {companiesData.map((company) => (
            <div
              key={company.id}
              className="bg-[#1c2229] p-10 rounded-lg flex flex-col items-center justify-center border border-gray-700/50 hover:border-green-500 transition cursor-pointer group"
              onClick={() => openModal(company)}
            >
              <img
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                className="max-h-16 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{company.name}</h3>
              <p className="text-sm text-gray-400 mb-2">
                {company.jobs[0]?.title} | {company.jobs[0]?.location}
              </p>

              <button className="text-green-400 group-hover:underline flex items-center gap-1">
                View Details <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <dialog id="company_modal" className="modal modal-bottom sm:modal-middle">
        <div
          className="modal-box bg-[#1c2229] border border-gray-700/50 w-full mx-auto p-6"
          style={{ maxWidth: "95vw" }}
        >
          {selectedCompany && (
            <>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-[#0f1316] p-6 rounded-lg border border-gray-700/50 flex flex-col items-center w-full md:w-1/3">
                  <img
                    src={selectedCompany.logo}
                    alt={selectedCompany.name}
                    className="w-32 h-32 object-contain mb-4 rounded-lg bg-white/5 p-2"
                  />
                  <h2 className="text-xl font-bold text-white mb-2">
                    {selectedCompany.name}
                  </h2>

                  <div className="w-full space-y-3 mt-2">
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="h-4 w-4 text-green-400" />
                      <span className="text-sm">
                        {selectedCompany.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                      <Building className="h-4 w-4 text-green-400" />
                      <span className="text-sm">
                        {selectedCompany.industry}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                      <Globe className="h-4 w-4 text-green-400" />
                      <a
                        href={selectedCompany.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-400 hover:underline"
                      >
                        {selectedCompany.website.replace("https://", "")}
                      </a>
                    </div>
                  </div>

                  <a
                    href={selectedCompany.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm font-medium transition-colors flex items-center gap-1"
                  >
                    Visit Website <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="md:w-2/3 space-y-4">
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-green-400" />
                      <h3 className="text-lg font-bold text-white">
                        {selectedCompany.jobs[0]?.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-[#0f1316] p-2 rounded">
                        <p className="text-xs text-gray-400">Location</p>
                        <p className="text-sm text-white">
                          {selectedCompany.jobs[0]?.location}
                        </p>
                      </div>
                      <div className="bg-[#0f1316] p-2 rounded">
                        <p className="text-xs text-gray-400">Job Type</p>
                        <p className="text-sm text-white">
                          {selectedCompany.jobs[0]?.jobType}
                        </p>
                      </div>
                      <div className="bg-[#0f1316] p-2 rounded">
                        <p className="text-xs text-gray-400">Salary Range</p>
                        <p className="text-sm text-white">
                          {selectedCompany.jobs[0]?.salary}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-md font-semibold text-white mb-2">
                        Job Description
                      </h4>
                      <p className="text-sm text-gray-300">
                        {selectedCompany.jobs[0]?.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-md font-semibold text-white mb-2">
                        Requirements
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedCompany.jobs[0]?.requirements.map(
                          (req, index) => (
                            <li key={index} className="text-sm text-gray-300">
                              {req}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={handleApply}
                        className="px-4 cursor-pointer py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium transition-colors"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default CompanySection;
