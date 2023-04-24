import PropTypes from 'prop-types';
import { Title } from './Filter.styled';
import { RiUserSearchFill } from "react-icons/ri";

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Title><RiUserSearchFill /> Find contact by name </Title>
      <input value={value} onChange={onChange} />
    </>

  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};