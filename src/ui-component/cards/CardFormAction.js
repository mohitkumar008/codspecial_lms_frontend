import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';

const CardFormAction = ({ title, link, icon, text }) => {
  const navigate = useNavigate();

  const handleCreateUser = () => {
    // Navigate to the create user page
    navigate(link);
  };
  const iconStyle = !text ? { margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'stretch' } : {};
  return (
    <Tooltip title={title || 'Button'} placement="left">
      <Button variant="contained" endIcon={icon} style={iconStyle} onClick={handleCreateUser}>
        {text && text}
      </Button>
    </Tooltip>
  );
};

CardFormAction.propTypes = {
  icon: PropTypes.node,
  link: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

export default CardFormAction;
