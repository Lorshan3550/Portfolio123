import PropTypes from 'prop-types';
import './Product.css';

const Product = ({ img, link }) => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target='_blank' rel="noreferrer">
        {img && <img src={img} alt="" className="p-img" />}
      </a>
    </div>
  );
};

Product.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Product;
