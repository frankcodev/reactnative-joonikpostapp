import React, { useContext, useState } from 'react';
import { authContext } from '../../context/authContext';
import Dropdown from '../ui/Dropdown';
import { HeaderView } from '../ui/Layouts';
import SecondButton from '../ui/SecondButton';

const SessionHeader = () => {

    const [dropOpen, setDropOpen] = useState(false)
    const {user, handleLogout} = useContext(authContext)


    return (
        <HeaderView>
            <Dropdown text={user} onPress={() => setDropOpen(!dropOpen)} open={dropOpen}>
                <SecondButton text = 'Logout' onPress={handleLogout}/>
            </Dropdown>
         </HeaderView>
      );
}
 
export default SessionHeader;