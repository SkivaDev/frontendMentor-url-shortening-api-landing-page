import React, { useEffect, useState } from "react";
import cleanuriAPI from "../api/cleanuriAPI";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ShorteningSection = () => {
  //Array de enlaces acortados
  const [links, setLinks] = useState([]);

  //Funcion para obtener los enlaces acortados almacenados en el localStorage
  useEffect(() => {
    fetchLinks();
    console.log(links);
  }, []);

  useEffect(() => {
    console.log(links);
  }, [links]);

  //references es un objeto que almacena referencias a los botones.
  let references = {};

  //getOrCreateRef crea o devuelve una referencia existente para una clave específica.
  const getOrCreateRef = (key) => {
    if (!references.hasOwnProperty(key)) {
      references[key] = React.createRef();
    }
    return references[key];
  };

  //setFocusToButton desplaza la vista y enfoca un botón específico usando su referencia.
  const setFocusToButton = (key) => {
    references[key].current &&
      references[key].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    references[key].current &&
      references[key].current.focus({ preventScroll: true });
  };

  //fetchLinks recupera los enlaces guardados en localStorage.
  const fetchLinks = async () => {
    const links = JSON.parse(localStorage.getItem("links"));
    if (links) setLinks(links);
  };

  const handleErrors = (errorMessage) => {
    toast.error(errorMessage);
  };


  const createShortLink = async (link) => {
    const response = await cleanuriAPI(link);

    if (response.status !== 200) {
      console.log("SALIO ERROR :c");
      handleErrors(response.response.data.error);
      console.log(response.response.data.error);
      return false;
    }

    const { result_url } = response.data;
    console.log("RESULT ES: ", response.data);
    console.log("RESULT ES: ", result_url);
    const linkExists = links.find(
      (url) => url.original_link === link
    );

    if (linkExists) {
      toast.warning("This link has already been shortened");
      setFocusToButton(linkExists.code);
      return true;
    }

    const newLink = {
      original_link: link,
      short_link: result_url,
    };

    // const linkExists = links.find(
    //   (link) => link.original_link === result.original_link
    // );

    // if (linkExists) {
    //   toast.warning("This link has already been shortened");
    //   setFocusToButton(linkExists.code);
    //   return true;
    // }

    setLinks([newLink, ...links]);
    localStorage.setItem("links", JSON.stringify([newLink, ...links]));
    return true;
  };

  return (
    <section className="w-full bg-light-gray">
      <div className="flex flex-col w-full max-w-[1190px] mx-auto px-[23.6px] md:px-[39.6px] pb-[90px] md:pb-[120px]">
        <Form onHandleSubmit={createShortLink} />
        <div className="flex flex-col gap-[15px] mt-[24px]">
          {links.map((link, index) => (
            <SingleLink
              key={index}
              link={link}
              ref={getOrCreateRef(link.code)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Form = ({ onHandleSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { url } = data;

    onHandleSubmit(url).then((res) => {
      if (res) {
        reset();
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col md:flex-row justify-between gap-[16px] md:gap-[24px] px-[24px] md:pl-[64px] md:pr-[65px] py-[25px] md:py-[52px] mt-[-80px] md:mt-[-84px] rounded-[10px] bg-dark-violet bg-pattern bg-no-repeat bg-cover"
    >
      <div className="relative w-full md:flex-1 bg-white h-full px-[16px] md:px-[30px] py-[10px] md:pt-[18px] md:pb-[15px] text-[19px] font-medium rounded-[10px] tracking-[0.5px] md:tracking-normal">
        <input
          id="link-input"
          type="text"
          placeholder="Shorten a link here..."
          className="w-full bg-transparent text-[15px] md:text-[20px]"
          {...register("url", {
            required: {
              value: true,
              message: "Please add a link",
            },
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+$/,
              message: "Please enter a valid URL",
            },
          })}
          validation={errors.url}
        />
        <label htmlFor="link-input" className="sr-only">
          Shorten a link here...
        </label>

        <div aria-live="polite" aria-atomic="true">
          {errors.url?.type === "required" && (
            <span className="absolute bottom-[-30px] left-2 text-red text-[13px] mt-[2px]">
              {errors.url.message}
            </span>
          )}
          {errors.url?.type === "pattern" && (
            <span className="absolute bottom-[-30px] left-2 text-red text-[13px] mt-[2px]">
              {errors.url.message}
            </span>
          )}
          {errors.url?.type === "custom" && (
            <span className="absolute bottom-[-30px] left-2 text-red text-[13px] mt-[2px]">
              {errors.url.message}
            </span>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full md:w-[188px] md:flex md:justify-center md:items-center py-[8px] px-[40px] md:p-0 text-[20px] font-bold rounded-[10px] tracking-[-0.99px] md:tracking-normal bg-cyan text-white hover:bg-light-cyan transition-all"
      >
        Shorten It!
      </button>
    </form>
  );
};

const SingleLink = React.forwardRef(({ link }, ref) => {
  const [Copied, setCopied] = useState(false);

  const copyToClipboard = (str, e) => {
    e.preventDefault();
    setTimeout(() => {
      setCopied(false);
      // e.target.textContent = "Copy";
    }, 5000);

    // e.target.classList.add(classes.singleLink__buttonCopied);
    // e.target.textContent = "Copied!";
    setCopied(true);

    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  if (!link) return null;

  return (
    <div
      ref={ref}
      className="w-full flex flex-col md:flex-row justify-between items-center gap-[90px] bg-white pr-[24px] pl-[32px] py-[16px] text-[19px] font-medium rounded-[10px] tracking-[0.5px]"
    >
      <p className="w-full md:flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
        {link.original_link}
      </p>
      <div>
        <a className="w-full md:w-[188px] mt-[16px] md:mt-0 md:ml-[16px] text-cyan">
          {link.short_link}
        </a>
        <button
          ref={ref}
          type="button"
          className={`${
            Copied ? "bg-dark-violet" : "bg-cyan"
          } w-full md:w-[103px] md:ml-[16px] py-[10px] text-white text-[15px] font-bold rounded-[6px] transition-all`}
          onClick={(e) => copyToClipboard(link.short_link, e)}
        >
          {Copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
});

export default ShorteningSection;
