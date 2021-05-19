//HTTP RESPONSE STATUS CODES

//1xx informational response - the request was recieved, continuing process

//2xx successful - the request was successfully received understood and accepted
const OK = 200
const CREATED = 201

//3xx redirection - further action needs to be taken in order to complete the request

//4xx client error - the request contains bad syntax or cnannot be fulfilled
const BAD_REQUEST = 400
const UNAUTHORIZED = 401
const  FORBIDEN =  403
const NOT_FOUND = 404
const METHO_NOT_ALLOWED = 405
const DUBLICATE_RESOURCE = 409
//418 

//5xx sever error - the server failled to fulfill an apporentiy valid request
const INTERNAL_SERVER_ERROR = 500


export default{
    OK,
    CREATED,
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDEN,
    NOT_FOUND,
    METHO_NOT_ALLOWED,
    DUBLICATE_RESOURCE,
    INTERNAL_SERVER_ERROR
}