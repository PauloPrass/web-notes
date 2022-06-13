import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';

import './account-overview.css';

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <FontAwesomeIcon icon={faHardHat} />
      <h1>Welcome {data.login}</h1>
    </div>
  )
}

export default AccountOverview;