export enum HeaderType {
    AUTHORIZATION = 'Authorization',
    ACCEPT = 'Accept',
    CONTENT_TYPE = 'Content-Type'
}

export enum RequestMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export enum StatusCodes {
    ok = 200,
    created = 201,
    accepted = 202,
    badRequest = 400,
    notFound = 404,
    unauthorized = 401,
    conflict = 409,
    unprocessableEntity = 422,
    serverError = 500
}

export enum StorageKeyNames {
    AUTH_TOKEN = 'token'
}
