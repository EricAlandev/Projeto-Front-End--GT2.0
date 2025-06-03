const InfoSection = ({ title, informations }) => {
    return (
      <div className="flex flex-col">
        <h3 className="text-lg font-bold ">{title}</h3>
        <ul className="mt-3 ">
          {informations.map((info, index) => (
            <li key={index}>
              <a href={info.link} className="text-white hover:underline ">
                {info.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default InfoSection;
  