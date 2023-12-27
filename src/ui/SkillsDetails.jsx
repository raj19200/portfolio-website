/* eslint-disable react/prop-types */
function SkillsDetails({ skill: { skillLogo, skillName } }) {
  return (
    <div className="text-center text-clip ">
      <img
        src={`../src/data/${skillLogo}`}
        className="mx-auto h-10 w-10 md:h-20 md:w-20"
        alt={skillName}
      />
      <p>{skillName}</p>
    </div>
  );
}

export default SkillsDetails;
