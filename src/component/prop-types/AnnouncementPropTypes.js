import PropTypes from 'prop-types';

const announcementPropType = {
  logo_small: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  expertise: PropTypes.string.isRequired,
  localisation: PropTypes.string.isRequired,
  prix: PropTypes.number.isRequired,
};

export default announcementPropType;
