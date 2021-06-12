// What is HTTP?
/// Hypertext Transfer Protocol: how browsers and servers communicate. it allows the fetching of resources. Default Port is usually 80

// What is a URL?
/// Uniform Resource Locator: It is the structure of the link we enter into our browser to identify where we want to go. It consists of Protocol, Hostname, Port, Resource, Query

// What is DNS?
///Domain Name System: turns the Hostname into an IP Address AKA Internet Protocol into an identifiable id for the network to communicate with your computer. It's like a social security number for your computer.

// What is a query string?
/// This provides “extra information” — search terms, info from forms, etc

// What are two HTTP verbs and how are they different?
/// GET and POST are very common HTTP verbs. GET requests without side effects (doesn't change server data) like searching a topic or thread on reddit. Whereas POST requests WITH side effects (changes server data) Like posting on someone instagram or like Colt exampled in his reddit post on the /soccer thread.

// What is an HTTP request?
/// an action that is performed per request by given Request-URL or Request Method

// What is an HTTP response?
/// a response status code that will show the current state of the HTTP server. hopefully 200

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
/// Headers provide additional information about the request or the response. Here are some examples: Request headers: Host, User-Agent, Accept, Cookie, Cache-Control. Response headers: Content-Type, Last-Modified, Set-Cookie, Cache-Control

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
/// Your browser “resolves” the name into an IP address using DNS Your browser makes a request to that IP address, including headers (info about browser, any previous cookies, and other things) The server sends a response (typically, HTML, with a status code (200 if it was sucessful) The browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc) The browser makes separate HTTP requests for those resources and receives response from the server for each
