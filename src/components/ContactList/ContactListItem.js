import PropTypes from "prop-types";
import { RiUserUnfollowFill } from 'react-icons/ri';
import { DeleteBtn } from './ContactListItem.styled';

export const ContactListItem = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <>
      <div>
        <span>{name}:</span> <span>{number}</span>
      </div>
      <div>
        <DeleteBtn title="Delete contact" aria-label='Delete contact' type="button" onClick={() => onDeleteContact(id)}><RiUserUnfollowFill /></DeleteBtn>
      </div>
    </>
  )
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}