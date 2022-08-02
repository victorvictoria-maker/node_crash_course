const url = require('url');

const myUrl = new URL('https://mywebsite.com:8000/hello.html?id=100&status=active');

// serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// host / root domain
console.log(myUrl.host);

// hostname (does not include the port)
console.log(myUrl.hostname);

// pathname of the actual file
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// search params (returns object)
console.log(myUrl.searchParams);

// to dynamically add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
console.log(myUrl.href);

// loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
});