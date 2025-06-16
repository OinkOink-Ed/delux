import PropTypes from "prop-types";
import { Link } from "react-router";

export function CardProject({ id, description, headName, count, text }) {
  return (
    <div className="flex flex-col basis-md max-sm:basis-xs gap-4 ">
      {/* Фото по номерам ID проекта */}
      <div className="flex h-auto overflow-hidden min-h-[534px]">
        <Link to={`/project/:${id}`} state={{ count, p: `${text}` }}>
          <img
            src={`/img/${id.replaceAll(' ', '')}.jpg`}
            className="transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full object-cover self-center"
          ></img>
        </Link>
      </div>

      <div className="flex flex-col gap-x-24">
        <h3 className="text-2xl">{headName}</h3>
        <p>{description}</p>
        <Link
          to={`/project/:${id}`}
          className="underline-offset-4 underline text-blue-400 active hover:text-blue-600"
          state={{ count, p: `${text}` }}
        >
          Узнать больше
        </Link>
      </div>
    </div>
  );
}

CardProject.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  headName: PropTypes.string,
  count: PropTypes.number,
  text: PropTypes.string,
};
