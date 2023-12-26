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
        <div className="font-thin brightness-50 pb-5">{company.period}</div>

        <div>{company.description}</div>
      </div>
    </div>
  );
}

export default ExperienceDetails;
