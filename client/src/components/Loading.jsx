import React from 'react';
import { css } from '@emotion/react';
import { ScaleLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <ScaleLoader color={'#700035'} loading={true} css={override} size={150} />
      </div>
    </div>
  );
};

export default Loading;
