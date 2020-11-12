import {PropsUser} from './PropsUser';

export interface PageProps {
    user: PropsUser,
}

export interface PageState {
   readonly user: PropsUser;
}