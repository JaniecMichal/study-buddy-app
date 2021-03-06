import React from 'react';
import PropTypes from 'prop-types';
import { ItemWrapper } from './styled';
import UserAverage from 'components/atoms/UserAverage';
import UserName from 'components/atoms/UserName';
import Button from 'components/atoms/Button';
import { ReactComponent as RemoveIcon } from 'assets/images/removeIcon.svg';

const UserListItem = ({
  deleteUser,
  userData: { name, attendance = '0%', average },
}) => {
  return (
    <ItemWrapper>
      <UserAverage average={average} />
      <UserName name={name} attendance={attendance} />
      <Button onClick={() => deleteUser(name)}>
        <RemoveIcon />
      </Button>
    </ItemWrapper>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    average: PropTypes.string.isRequired,
  }),
};

export default UserListItem;
