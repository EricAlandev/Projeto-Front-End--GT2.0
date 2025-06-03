import { Link } from "react-router-dom";

const Section = ({ title, titleAlign, link, children }) => {
  return (
    <section className="mb-6">
      <div className="mb-2">
        <h2 className={`mt-[12px] text-[24px] text-[#474747] font-[Inter] font-[350] ${titleAlign === "center" ? "text-center" : "text-left"}`}>
            {title}
        </h2>

        {/*Se o link for usado, ele vai permitir você modificar o href e o label que seria o texto que você desejar. */}
         {link &&(
            <Link to={link.path} className="text-[#C92071] text-[18px]"> {link.label}</Link>
        )}{/*OBSERVAÇÃO: o lado direito alinhado vertical com o título. */}

        {/*Exemplo:  link = {{ path: "/Unfound",  label: "Veja agora seu produto" }} /*A primeira chave é pra indicar js e a segunda Chave é pra indicar o que está sendo usado do js.*/}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
