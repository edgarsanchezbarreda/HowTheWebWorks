// Part One: Solidify Knowledge

// 1. What is HTTP? 
// HTTP, or Hypertext Transfer Protocol, is a standardized way of communicating with web servers. 

// 2. What is a URL?
// A URL, or Universal Resource Locators, is a reference to a web address that can direct users to a specific web page. URL's include a protocol, a hostname, a port, a resource, and optionally a query.

// 3. What is DNS
// DNS, or Domain Name System, it takes a hostname, which is a readable name or "nickname" that refers to a specific IP address, into that IP address. When a user tries to visit a website, the browser tries to look for the website's IP address through a few locations, and if not found, usually the DNS Server will be able to locate the correct IP address and direct users to the correct website.

// 4. What is a query string?
// A query string is an optional piece of a URL, which provides extra information, such as search terms, information from forms and more. You can specifiy parameters where you can search for things on a website. It is comprised of key-value pairs, which begin with a question mark and are separated by the '&' symbol.

// 5. What are two HTTP verbs and how are they different?
// Two examples of HTTP verbs are GET and POST. Some differences are that GET is a request with no side effects, such as clicking a link on a page that takes a user to another page. POST involves a request that do include side effects, which do change server data. An example of POST request is making a comment on Youtube, which changes the server data to include the comment.

// 6. What is an HTTP request?
// An HTTP request is process where a user's browser attempts to visit a webpage on a server, and makes a request to that server. A request includes a method, like GET, an HTTP protocol version, usually 1.1, a resource URL, and headers, which include different sources of information.

// 7. What is an HTTP response?
// An HTTP response is a server's response to a client's request for a specific resource. It includes a lot of the same information as a request, but also includes a response code, which give information as to whether the request was found or not, or whether it encountered any problems finding the requested resource.

// 8. What is an HTTP header? 
// Headers contain meta data relating to a a equest or response. Examples of headers in a request are the hostname that is being requested, the date and time the browser thinks it is, the language your browser wants the information in, and cookies the server sends and more. Examples of headers in a response include the content type, the date and time, cookies the server wants to set, caching information and more.

// 9. What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// Your browser attemps to find out the correct IP address attributed to the hostname using the DNS, then the browser make an HTTP request to the IP address' servers, which is followed by an HTTP response from the servers which will determine whether the response was successful or not, and will send over the information as HTML or another form of data, which than creates the webpage that the client sees.