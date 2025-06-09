import { Link } from "react-router-dom";

const Section = ({ 
  title, 
  titleAlign = "left", 
  link, 
  children, 
  titleClassName = "" 
}) => {
  return (
    <section className="mb-6">
      <div className="mb-2">
        <h2 
          className={`
            mt-[12px] text-[24px] text-[#474747] 
            font-[Inter] font-[350]
            ${titleAlign === "center" ? "text-center" : "text-left"}
            ${titleClassName}
          `}
        >
          {title}
        </h2>

        {link && (
          <Link to={link.path} className="text-[#C92071] text-[18px]">
            {link.label}
          </Link>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;