import PropTypes from "prop-types";
import { Link } from "react-router";

export function CardProjectMini({ id, description, headName, count, text, address }) {
  return (
    <div className="flex flex-col basis-xs max-sm:basis-xs gap-4">
      {/* Фото по номерам ID проекта */}
      <div className=" flex h-auto overflow-hidden min-h-[382px]">
        <Link to={`/project/:${id}`} state={{ count, p: `${text}` }}>
          <img
            src={`/img/${id.replaceAll(' ', '')}.jpg`}
            className="transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full object-cover self-center"
          ></img>
        </Link>
      </div>
      <div className="flex flex-col gap-x-24">
        <h3 className="font-share-tech-mono text-2xl mt-2">{headName}</h3>
        <p className=" my-2 font-share-tech-mono">{description}</p>
        <Link
          to={`/project/:${id}`}
          className="underline-offset-4 underline text-blue-400 active hover:text-blue-600"
          state={{ count, p: `${text}`, address: `${address}` }}
        >
          Узнать больше
        </Link>
      </div>
    </div>
  );
}

CardProjectMini.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  headName: PropTypes.string,
  count: PropTypes.number,
  text: PropTypes.string,
  address: PropTypes.string,
};
