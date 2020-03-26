import React from 'react';
import styles from 'styled-components';

const Flex = styles.div`
{
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: stretch;
	align-content: stretch;
}
`;
const WhiteH1 = styles.h1`
    padding: 0.9em;
    line-height: 0em;
    color: #fff;
`;

const Header = () => {
  return (
    <Flex>
      <WhiteH1>TW<span className="App-logo">W</span></WhiteH1>
      <WhiteH1>=</WhiteH1>
    </Flex>
  );
};

export default Header;