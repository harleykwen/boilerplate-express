export type TypeStatusCode = {
    [key: string]: {
        code: number
        description: string
    }
}

const STATUS_CODE: TypeStatusCode = {
    CONTINUE: {
        code: 100,
        description: 'Continue'
    },
    SWITCHING_PROTOCOLS: {
        code: 101,
        description: 'Switching Protocols'
    },
    PROCESSING: {
        code: 102,
        description: 'Processing'
    },
    OK: {
        code: 200,
        description: 'OK'
    },
    CREATED: {
        code: 201,
        description: 'Created'
    },
    ACCEPTED: {
        code: 202,
        description: 'Accepted'
    },
    NON_AUTHORITATIVE_INFORMATION: {
        code: 203,
        description: 'Non Authoritative Information'
    },
    NO_CONTENT: {
        code: 204,
        description: 'No Content'
    },
    RESET_CONTENT: {
        code: 205,
        description: 'Reset Content'
    },
    PARTIAL_CONTENT: {
        code: 206,
        description: 'Partial Content'
    },
    MULTI_STATUS: {
        code: 207,
        description: 'Multi-Status'
    },
    MULTIPLE_CHOICES: {
        code: 300,
        description: 'Multiple Choices'
    },
    MOVED_PERMANENTLY: {
        code: 301,
        description: 'Moved Permanently'
    },
    MOVED_TEMPORARILY: {
        code: 302,
        description: 'Moved Temporarily'
    },
    SEE_OTHER: {
        code: 303,
        description: 'See Other'
    },
    NOT_MODIFIED: {
        code: 304,
        description: 'Not Modified'
    },
    USE_PROXY: {
        code: 305,
        description: 'Use Proxy'
    },
    TEMPORARY_REDIRECT: {
        code: 307,
        description: 'Temporary Redirect'
    },
    PERMANENT_REDIRECT: {
        code: 308,
        description: 'Permanent Redirect'
    },
    BAD_REQUEST: {
        code: 400,
        description: 'Bad Request'
    },
    UNAUTHORIZED: {
        code: 401,
        description: 'Unauthorized'
    },
    PAYMENT_REQUIRED: {
        code: 402,
        description: 'Payment Required'
    },
    FORBIDDEN: {
        code: 403,
        description: 'Forbidden'
    },
    NOT_FOUND: {
        code: 404,
        description: 'Not Found'
    },
    METHOD_NOT_ALLOWED: {
        code: 405,
        description: 'Method Not Allowed'
    },
    NOT_ACCEPTABLE: {
        code: 406,
        description: 'Not Acceptable'
    },
    PROXY_AUTHENTICATION_REQUIRED: {
        code: 407,
        description: 'Proxy Authentication Required'
    },
    REQUEST_TIMEOUT: {
        code: 408,
        description: 'Request Timeout'
    },
    CONFLICT: {
        code: 409,
        description: 'Conflict'
    },
    GONE: {
        code: 410,
        description: 'Gone'
    },
    LENGTH_REQUIRED: {
        code: 411,
        description: 'Length Required'
    },
    PRECONDITION_FAILED: {
        code: 412,
        description: 'Precondition Failed'
    },
    REQUEST_TOO_LONG: {
        code: 413,
        description: 'Request Entity Too Large'
    },
    REQUEST_URI_TOO_LONG: {
        code: 414,
        description: 'Request-URI Too Long'
    },
    UNSUPPORTED_MEDIA_TYPE: {
        code: 415,
        description: 'Unsupported Media Type'
    },
    REQUESTED_RANGE_NOT_SATISFIABLE: {
        code: 416,
        description: 'Requested Range Not Satisfiable'
    },
    EXPECTATION_FAILED: {
        code: 417,
        description: 'Expectation Failed'
    },
    IM_A_TEAPOT: {
        code: 418,
        description: 'I"m a teapot'
    },
    INSUFFICIENT_SPACE_ON_RESOURCE: {
        code: 419,
        description: 'Insufficient Space on Resource'
    },
    METHOD_FAILURE: {
        code: 420,
        description: 'Method Failure'
    },
    MISDIRECTED_REQUEST: {
        code: 421,
        description: 'Misdirected Request'
    },
    UNPROCESSABLE_ENTITY: {
        code: 422,
        description: 'Unprocessable Entity'
    },
    LOCKED: {
        code: 423,
        description: 'Locked'
    },
    FAILED_DEPENDENCY: {
        code: 424,
        description: 'Failed Dependency'
    },
    PRECONDITION_REQUIRED: {
        code: 428,
        description: 'Precondition Required'
    },
    TOO_MANY_REQUESTS: {
        code: 429,
        description: 'Too Many Requests'
    },
    REQUEST_HEADER_FIELDS_TOO_LARGE: {
        code: 431,
        description: 'Request Header Fields Too Large'
    },
    UNAVAILABLE_FOR_LEGAL_REASONS: {
        code: 451,
        description: 'Unavailable For Legal Reasons'
    },
    INTERNAL_SERVER_ERROR: {
        code: 500,
        description: 'Internal Server Error'
    },
    NOT_IMPLEMENTED: {
        code: 501,
        description: 'Not Implemented'
    },
    BAD_GATEWAY: {
        code: 502,
        description: 'Bad Gateway'
    },
    SERVICE_UNAVAILABLE: {
        code: 503,
        description: 'Service Unavailable'
    },
    GATEWAY_TIMEOUT: {
        code: 504,
        description: 'Gateway Timeout'
    },
    HTTP_VERSION_NOT_SUPPORTED: {
        code: 505,
        description: 'HTTP Version Not Supported'
    },
    INSUFFICIENT_STORAGE: {
        code: 507,
        description: 'Insufficient Storage'
    },
    NETWORK_AUTHENTICATION_REQUIRED: {
        code: 511,
        description: 'Network Authentication Required'
    },
}

export default STATUS_CODE