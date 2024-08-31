import type { StatusCodes } from '../Base/constants'
import type { TCredentialsWithFullName } from './service'

export type TUser = Omit<TCredentialsWithFullName, 'password'> & { id: number }

export type TSignUpResponse = {
    status: StatusCodes
    payload: TSignUpResponsePayload
}

export type TSignUpResponsePayload = {
    data: TUser
    token: string
}

export type TLoginResponse = TSignUpResponse
