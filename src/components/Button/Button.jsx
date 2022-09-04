import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ img, title, onClick }) => {
  const { button, button__img } = styles;

  return (
    <button className={button} onClick={onClick}>
      <img className={button__img} src={img} alt={`${title} smiley face`} />
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
