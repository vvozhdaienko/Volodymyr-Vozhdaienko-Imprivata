export interface PropsUser {
    user: {
        displayName: string,
        emails: object[],
        id: string,
        locale: string,
        name:{
            familyName: string,
            givenName: string,
        },
        nickname: string,
        picture: string,
        provider: string,
        user_id: string,
        json: {
            email: string,
            email_verified: boolean,
            family_name: string,
            given_name: string,
            locale: string,
            name: string,
            nickname: string,
            picture: string,
            sub: string,
            updated_at: string,
        },
        _raw: string,
    }
}