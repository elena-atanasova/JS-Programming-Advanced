// validate HTTP request object
function validate(obj) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uri = /^[a-z0-9.]+$/;
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let message = /^([^<>\\\&\'\"]*)$/;

    if (!methods.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if (!obj.uri.match(uri)) {
        throw new Error(`Invalid request header: Invalid Uri`);
    }
    if (!versions.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (!obj.message.match(message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return obj;
}

let result = validate({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});
console.log(result);