import { HeaderType } from '../Base/constants'
import { BaseService } from '../Base/service'
import { AUTH_ME_URL, LOGIN_URL, SIGN_UP_URL } from './config'
import type { TSignUpResponsePayload, TUser } from './types'

export type TCredentials = {
    email: string
    password: string
}

export type TCredentialsWithFullName = {
    fullName: string
} & TCredentials

class AuthService extends BaseService {
    async login(creadentials: TCredentials) {
        return await fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                [HeaderType.ACCEPT]: 'application/json',
                [HeaderType.CONTENT_TYPE]: 'application/json'
            },
            body: JSON.stringify(creadentials)
        }).then((res) => this.handleResponse<TSignUpResponsePayload>(res))
    }

    async signUp(creadentials: TCredentialsWithFullName) {
        return await fetch(SIGN_UP_URL, {
            method: 'POST',
            headers: {
                [HeaderType.ACCEPT]: 'application/json',
                [HeaderType.CONTENT_TYPE]: 'application/json'
            },
            body: JSON.stringify(creadentials)
        }).then((res) => this.handleResponse<TSignUpResponsePayload>(res))
    }

    async checkAuth() {
        return await this.fetchExtended({
            url: AUTH_ME_URL,
            isPrivate: true,
            headers: {
                [HeaderType.ACCEPT]: 'application/json',
                [HeaderType.CONTENT_TYPE]: 'application/json'
            }
        }).then((res) => this.handleResponse<TUser>(res))
    }
}

const authService = new AuthService()

export default authService
