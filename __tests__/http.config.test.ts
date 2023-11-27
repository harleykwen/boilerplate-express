import { 
    statusCode, 
    TypeStatusCode, 
    sendCustomResponse, 
} from '../src/config/http.config'

describe('http.config.ts | statusCode', function () {
    it('Should have all HTTP response status code', function () {
        const COMPARING_STATUS_CODE: TypeStatusCode = {
            CONTINUE: {
                code: 100,
                name: "Continue"
            },
            SWITCHING_PROTOCOLS: {
                code: 101,
                name: "Switching Protocols"
            },
            PROCESSING: {
                code: 102,
                name: "Processing"
            },
            OK: {
                code: 200,
                name: "OK"
            },
            CREATED: {
                code: 201,
                name: "Created"
            },
            ACCEPTED: {
                code: 202,
                name: "Accepted"
            },
            NON_AUTHORITATIVE_INFORMATION: {
                code: 203,
                name: "Non-Authoritative Information"
            },
            NO_CONTENT: {
                code: 204,
                name: "No Content"
            },
            RESET_CONTENT: {
                code: 205,
                name: "Reset Content"
            },
            PARTIAL_CONTENT: {
                code: 206,
                name: "Partial Content"
            },
            MULTI_STATUS: {
                code: 207,
                name: "Multi-Status"
            },
            ALREADY_REPORTED: {
                code: 208,
                name: "Already Reported"
            },
            IM_USED: {
                code: 226,
                name: "IM Used"
            },
            MULTIPLE_CHOICES: {
                code: 300,
                name: "Multiple Choices"
            },
            MOVED_PERMANENTLY: {
                code: 301,
                name: "Moved Permanently"
            },
            FOUND: {
                code: 302,
                name: "Found"
            },
            SEE_OTHER: {
                code: 303,
                name: "See Other"
            },
            NOT_MODIFIED: {
                code: 304,
                name: "Not Modified"
            },
            USE_PROXY: {
                code: 305,
                name: "Use Proxy"
            },
            SWITCH_PROXY: {
                code: 306,
                name: "Switch Proxy"
            },
            TEMPORARY_REDIRECT: {
                code: 307,
                name: "Temporary Redirect"
            },
            PERMANENT_REDIRECT: {
                code: 308,
                name: "Permanent Redirect"
            },
            BAD_REQUEST: {
                code: 400,
                name: "Bad Request"
            },
            UNAUTHORIZED: {
                code: 401,
                name: "Unauthorized"
            },
            PAYMENT_REQUIRED: {
                code: 402,
                name: "Payment Required"
            },
            FORBIDDEN: {
                code: 403,
                name: "Forbidden"
            },
            NOT_FOUND: {
                code: 404,
                name: "Not Found"
            },
            METHOD_NOT_ALLOWED: {
                code: 405,
                name: "Method Not Allowed"
            },
            NOT_ACCEPTABLE: {
                code: 406,
                name: "Not Acceptable"
            },
            PROXY_AUTHENTICATION_REQUIRED: {
                code: 407,
                name: "Proxy Authentication Required"
            },
            REQUEST_TIMEOUT: {
                code: 408,
                name: "Request Timeout"
            },
            CONFLICT: {
                code: 409,
                name: "Conflict"
            },
            GONE: {
                code: 410,
                name: "Gone"
            },
            LENGTH_REQUIRED: {
                code: 411,
                name: "Length Required"
            },
            PRECONDITION_FAILED: {
                code: 412,
                name: "Precondition Failed"
            },
            PAYLOAD_TOO_LARGE: {
                code: 413,
                name: "Payload Too Large"
            },
            URI_TOO_LONG: {
                code: 414,
                name: "URI Too Long"
            },
            UNSUPPORTED_MEDIA_TYPE: {
                code: 415,
                name: "Unsupported Media Type"
            },
            RANGE_NOT_SATISFIABLE: {
                code: 416,
                name: "Range Not Satisfiable"
            },
            EXPECTATION_FAILED: {
                code: 417,
                name: "Expectation Failed"
            },
            IM_A_TEAPOT: {
                code: 418,
                name: "I'm a teapot"
            },
            MISDIRECTED_REQUEST: {
                code: 421,
                name: "Misdirected Request"
            },
            UNPROCESSABLE_ENTITY: {
                code: 422,
                name: "Unprocessable Entity"
            },
            LOCKED: {
                code: 423,
                name: "Locked"
            },
            FAILED_DEPENDENCY: {
                code: 424,
                name: "Failed Dependency"
            },
            TOO_EARLY: {
                code: 425,
                name: "Too Early"
            },
            UPGRADE_REQUIRED: {
                code: 426,
                name: "Upgrade Required"
            },
            PRECONDITION_REQUIRED: {
                code: 428,
                name: "Precondition Required"
            },
            TOO_MANY_REQUESTS: {
                code: 429,
                name: "Too Many Requests"
            },
            REQUEST_HEADER_FIELDS_TOO_LARGE: {
                code: 431,
                name: "Request Header Fields Too Large"
            },
            UNAVAILABLE_FOR_LEGAL_REASONS: {
                code: 451,
                name: "Unavailable For Legal Reasons"
            },
            INTERNAL_SERVER_ERROR: {
                code: 500,
                name: "Internal Server Error"
            },
            NOT_IMPLEMENTED: {
                code: 501,
                name: "Not Implemented"
            },
            BAD_GATEWAY: {
                code: 502,
                name: "Bad Gateway"
            },
            SERVICE_UNAVAILABLE: {
                code: 503,
                name: "Service Unavailable"
            },
            GATEWAY_TIMEOUT: {
                code: 504,
                name: "Gateway Timeout"
            },
            HTTP_VERSION_NOT_SUPPORTED: {
                code: 505,
                name: "HTTP Version Not Supported"
            },
            VARIANT_ALSO_NEGOTIATES: {
                code: 506,
                name: "Variant Also Negotiates"
            },
            INSUFFICIENT_STORAGE: {
                code: 507,
                name: "Insufficient Storage"
            },
            LOOP_DETECTED: {
                code: 508,
                name: "Loop Detected"
            },
            NOT_EXTENDED: {
                code: 510,
                name: "Not Extended"
            },
            NETWORK_AUTHENTICATION_REQUIRED: {
                code: 511,
                name: "Network Authentication Required"
            }
        }

        const data: TypeStatusCode = statusCode
        Object.keys(data).map((code: any) => {
            expect(data[code].code).toEqual(COMPARING_STATUS_CODE[code].code)
            expect(data[code].name).toEqual(COMPARING_STATUS_CODE[code].name)
        })
    })
})

describe('http.config.ts | sendCustomResponse', () => {
    it('should send a custom response with data', () => {
        const mockRes: any = { status: jest.fn().mockReturnThis(), json: jest.fn() }
        const mockData = { key: 'value' }

        sendCustomResponse({
            response: mockRes,
            error: false,
            status: statusCode.OK.code,
            message: statusCode.OK.name,
            data: mockData,
        })

        expect(mockRes.status).toHaveBeenCalledWith(statusCode.OK.code)
        expect(mockRes.json).toHaveBeenCalledWith({
            error: false,
            status: statusCode.OK.code,
            message: statusCode.OK.name,
            data: mockData,
        })
    })

    it('should send a custom response without data', () => {
        const mockRes: any = { status: jest.fn().mockReturnThis(), json: jest.fn() }

        sendCustomResponse({
            response: mockRes,
            status: statusCode.INTERNAL_SERVER_ERROR.code,
            error: true,
            message: statusCode.INTERNAL_SERVER_ERROR.name,
        })

        expect(mockRes.status).toHaveBeenCalledWith(statusCode.INTERNAL_SERVER_ERROR.code)
        expect(mockRes.json).toHaveBeenCalledWith({
            status: statusCode.INTERNAL_SERVER_ERROR.code,
            error: true,
            message: statusCode.INTERNAL_SERVER_ERROR.name,
        })
    })
})