/* eslint-disable react/prop-types */
function ExperienceDetails({ company }) {
  return (
    <div className="company">
      <div className="flex flex-col leading-loose">
        <div className="pb-5">
          <span className="text-2xl text-websiteColor font-medium space-x-1">
            {company.companyName}
          </span>
        </div>
        <div className="pb-5">
          <span className="font-thin brightness-50">{company.period}</span>
          <span className="ml-4 text-websiteColor font-bold">
            {company.totalYearsOfExperience < 12
              ? `${company.totalYearsOfExperience} months`
              : `${Math.floor(company.totalYearsOfExperience / 12)} years${
                  company.totalYearsOfExperience % 12 !== 0
                    ? ` and ${company.totalYearsOfExperience % 12} months`
                    : ""
                }`}
          </span>
        </div>

        <div>{company.description}</div>
      </div>
    </div>
  );
}

export default ExperienceDetails;
