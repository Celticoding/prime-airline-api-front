declare global {
    var FLIGHT_API: string;
    var BOOKING_API: string;
    var QUEUE_API: string;
}

global.FLIGHT_API = "http://localhost:8081"
global.BOOKING_API = "http://localhost:8082"
global.QUEUE_API = "http://localhost:8085"
  
export default global;