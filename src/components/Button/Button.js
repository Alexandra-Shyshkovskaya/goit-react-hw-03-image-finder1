import style from "./Button.module.css";
import PropTypes from "prop-types";
const Button = ({ onClick }) => {
  return (
    <button className={style.Button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
