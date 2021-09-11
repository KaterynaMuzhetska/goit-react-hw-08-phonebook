import React from 'react';
import PropTypes from 'prop-types';

import styles from '../ContactListItem/contactListItem.module.css';

const ContactListItem = ({ name, number, id, onDeletContact }) => {
  return (
    <li className={styles.contactListItem}>
      <p className={styles.contact}>
        {' '}
        {name}: {number}
      </p>
      <button
        className={styles.buttonDelete}
        type="button"
        onClick={() => onDeletContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeletContact: PropTypes.func.isRequired,
};

export default ContactListItem;
