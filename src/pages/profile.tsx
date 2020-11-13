import React from "react";
import styled from "styled-components";
import {PropsUser} from "../interfaces/PropsUser";

const Picture = styled.img`
  border-radius: 50%;
  border: 3px solid white;
  width: 100px;
`;

const StyledContainer = styled.div`
      overflow: hidden;
`;const StyledLi = styled.li`
      text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
`;

function Profile({ user }: PropsUser) {
    return (
        <StyledContainer>
            <h2>
                <Picture src={user.picture} alt={user.displayName} /> Hello, {user.displayName}
            </h2>
            <p>This is what we know about you:</p>
            <ul>
                { Object.keys(user).map(key => (
                    <StyledLi key={key}>{key}: {user[key].toString()}</StyledLi>
                ))}
            </ul>
        </StyledContainer>
    );
}

export default Profile;