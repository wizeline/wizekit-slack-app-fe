import { Screen, ScreenBox } from './Loader.styles';
import wizeline from '../../assets/wizeline.png';
import React from 'react';
const Loader = () => {
  return (
    <div>
      <Screen>
        <ScreenBox>
          <img src={wizeline} alt="wizeline" height={80} width={80} />
          <div>Please standby ...</div>
        </ScreenBox>
      </Screen>
    </div>
  )
}

export default Loader
