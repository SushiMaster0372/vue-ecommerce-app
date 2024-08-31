import { HeaderType, RequestMethods, StatusCodes, StorageKeyNames } from './constants'

type TFetchParams = {
    url: string
    method?: RequestMethods
    body?: BodyInit
    headers?: HeadersInit
    isPrivate?: boolean
    origin?: string
}

export class BaseService {
    headers = {
        authrorization: HeaderType.AUTHORIZATION
    }

    requestMethods = {
        GET: RequestMethods.GET,
        POST: RequestMethods.POST,
        PATCH: RequestMethods.PATCH,
        PUT: RequestMethods.PUT,
        DELETE: RequestMethods.DELETE
    }

    statusCodes = {
        ok: StatusCodes.ok,
        created: StatusCodes.created,
        badRequest: StatusCodes.badRequest,
        unauthorized: StatusCodes.unauthorized,
        conflict: StatusCodes.conflict,
        unprocessableEntity: StatusCodes.unprocessableEntity,
        internalServerError: StatusCodes.serverError
    }

    constructor() {
        this.fetchExtended = this.fetchExtended.bind(this)
        this.handleResponse = this.handleResponse.bind(this)
    }

    fetchExtended({
        url,
        body,
        headers = {},
        isPrivate = false,
        method = this.requestMethods.GET,
        origin
    }: TFetchParams) {
        const authHeaders = isPrivate
            ? {
                  [this.headers.authrorization]:
                      'Bearer' + ' ' + (localStorage.getItem(StorageKeyNames.AUTH_TOKEN) ?? '')
              }
            : ({} as HeadersInit)

        return fetch(url, {
            method,
            body,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                ...headers,
                ...authHeaders
            },
            ...(origin ? { origin } : {})
        })
    }

    async handleResponse<T>(response: Response) {
        return response.json().then((data: T) => ({
            status: response.status,
            payload: data
        }))
    }
}
