// import { Button, Flex} from 
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const Logout: React.FC = () => {
    const history = useHistory();
    history.push('/login');

    return (
        <div> Logout </div>
    )
}