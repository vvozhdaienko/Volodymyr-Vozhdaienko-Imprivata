import React from "react";
import styled from "styled-components";
import {PropsUser} from "../interfaces/PropsUser";

const Picture = styled.img`
  border-radius: 50%;
  border: 3px solid white;
  width: 100px;
`;

function Profile({ user }: PropsUser) {
    return (
        <div>
            <h2>
                <Picture src={user.picture} alt={user.displayName} /> Hello, {user.displayName}
            </h2>
            <p>This is what we know about you:</p>
            <ul>
                { Object.keys(user).map(key => (
                    <li key={key}>{key}: {user[key].toString()}</li>
                ))}
            </ul>
        </div>
    );
}

export default Profile;