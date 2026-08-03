import type { QuizQuestion } from "./types";

export const jsonRestApiQuestions: QuizQuestion[] = [
  // --- REST API & HTTP Fundamentals ---
  {
    id: 1,
    question: "Which HTTP method is used to retrieve data from a REST API?",
    options: ["POST", "GET", "PUT", "DELETE"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "GET retrieves data from a REST API endpoint. POST creates new resources, PUT updates existing resources, and DELETE removes resources.",
  },
  {
    id: 2,
    question: "What does REST stand for?",
    options: [
      "Remote Execution Standard Transfer",
      "Representational State Transfer",
      "Routing External System Topology",
      "Resource Endpoint Secure Transmission",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "REST stands for Representational State Transfer. It is an architectural style for providing standards between computer systems on the web.",
  },
  {
    id: 3,
    question:
      "Which of the following is a core architectural constraint of a RESTful API?",
    options: [
      "Stateful server sessions",
      "Statelessness",
      "Strict XML formatting",
      "Direct database access",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Statelessness is a core REST constraint. The server does not store any state about the client session on the server side. Every request from the client must contain all information necessary to process it.",
  },
  {
    id: 4,
    question: "Which protocol forms the foundation of REST APIs?",
    options: ["SSH", "SNMP", "HTTP/HTTPS", "FTP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "REST APIs predominantly use HTTP and HTTPS as the transport protocol for exchanging data.",
  },
  {
    id: 5,
    question:
      "Which HTTP method is typically used to create a new resource on a server?",
    options: ["GET", "POST", "PATCH", "HEAD"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server (creating a new resource).",
  },
  {
    id: 6,
    question:
      "Which HTTP method is used to replace an entire existing resource?",
    options: ["PUT", "PATCH", "POST", "UPDATE"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "PUT replaces all current representations of the target resource with the request payload. PATCH is used for partial modifications.",
  },
  {
    id: 7,
    question: "What does it mean if an HTTP method is 'idempotent'?",
    options: [
      "It modifies the server state continuously each time the request is made to it.",
      "Making multiple identical requests has the same effect as making a single request.",
      "The request is fully encrypted, so it cannot be intercepted during transit.",
      "The method only accepts JSON payloads and rejects any other data format.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Idempotent methods (like GET, PUT, DELETE) ensure that making the exact same request multiple times leaves the server in the same state as making it once. POST is non-idempotent.",
  },
  {
    id: 8,
    question: "Which HTTP method is generally considered non-idempotent?",
    options: ["GET", "PUT", "DELETE", "POST"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "POST is non-idempotent because sending the same POST request multiple times will typically create multiple new resources on the server.",
  },
  {
    id: 9,
    question: "What does CRUD stand for in the context of REST APIs?",
    options: [
      "Create, Read, Update, Delete",
      "Compile, Run, Undo, Deploy",
      "Copy, Route, Upload, Download",
      "Client, Request, Uniform, Data",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "CRUD stands for Create, Read, Update, and Delete, which map to the POST, GET, PUT/PATCH, and DELETE HTTP methods respectively.",
  },
  {
    id: 10,
    question:
      "Which of the following is considered a 'Safe' HTTP method because it does not modify the server state?",
    options: ["POST", "PUT", "GET", "DELETE"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "GET and HEAD are 'safe' methods because they are strictly read-only and do not alter the state of the resource on the server.",
  },

  // --- HTTP Headers & URI Structure ---
  {
    id: 11,
    question:
      "In an HTTP request, which header specifies the data format the client expects to receive in the response?",
    options: ["Content-Type", "Accept", "Authorization", "User-Agent"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'Accept' header tells the server what media types (like application/json) the client is willing to accept in the response.",
  },
  {
    id: 12,
    question:
      "Which HTTP header specifies the format of the data being sent TO the server in the request body?",
    options: ["Content-Type", "Accept", "Transfer-Encoding", "Host"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The 'Content-Type' header indicates the media type of the resource being sent to the server (e.g., application/json).",
  },
  {
    id: 13,
    question:
      "Which part of the URL `https://api.cisco.com/v1/devices?status=active` represents the query parameter?",
    options: ["https://", "api.cisco.com", "/v1/devices", "?status=active"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The query parameter string begins with a question mark (?) and contains key-value pairs used to filter or sort data, such as '?status=active'.",
  },
  {
    id: 14,
    question:
      "In the URI `https://10.1.1.5:8443/api/v1/interfaces`, what does `8443` represent?",
    options: ["The scheme", "The port number", "The API version", "The path"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The number following the colon after the host address is the TCP port number the server is listening on.",
  },
  {
    id: 15,
    question: "What is an API endpoint?",
    options: [
      "The physical server hardware that actually hosts the API application",
      "The specific URI (URL path) where an API can be accessed by a client application",
      "The final router in a network that the request passes through",
      "The JSON payload that is returned in the body of the response message",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "An API endpoint is the specific digital location (URI path) where an API receives requests about a specific resource.",
  },
  {
    id: 16,
    question:
      "Which of the following characters is used to separate multiple query parameters in a URI?",
    options: ["?", "/", "&", "#"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The ampersand (&) is used to separate multiple query parameters, e.g., `?status=active&location=hq`.",
  },
  {
    id: 17,
    question:
      "Which component of an HTTP request contains the data payload (e.g., the JSON string) being sent to create a resource?",
    options: ["The URI", "The Headers", "The Body", "The Method"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The HTTP Request Body contains the actual data payload (like a JSON object) being sent to the server in POST, PUT, or PATCH requests.",
  },
  {
    id: 18,
    question: "What is the purpose of the 'Authorization' HTTP header?",
    options: [
      "To identify the client's operating system and browser version.",
      "To specify the size of the request body in bytes before transfer.",
      "To provide credentials to authenticate the client to the server.",
      "To authorize the server's SSL certificate for the connection.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Authorization header contains the credentials (like a Basic Auth string or Bearer token) needed to prove the client's identity.",
  },
  {
    id: 19,
    question:
      "Which of the following HTTP requests typically does NOT include a Request Body?",
    options: ["POST", "PUT", "PATCH", "GET"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "GET requests are used only to retrieve data and generally do not include a request body. Parameters are instead passed in the URI.",
  },
  {
    id: 20,
    question: "What is API Pagination?",
    options: [
      "Encrypting all of the API data so it cannot be read by anyone else.",
      "Dividing a large set of API results into smaller, manageable chunks or 'pages'.",
      "Authenticating multiple users at the same time with a single request.",
      "Translating the JSON data into XML for backward compatibility.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Pagination limits the number of items returned in a single API response (e.g., returning 50 devices per request) to reduce server load and improve client processing speed.",
  },

  // --- HTTP Status Codes ---
  {
    id: 21,
    question:
      "Which HTTP status code category indicates a successful client request?",
    options: ["1xx", "2xx", "4xx", "5xx"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Status codes in the 200 range (2xx) indicate that the client's request was successfully received, understood, and accepted.",
  },
  {
    id: 22,
    question:
      "Which HTTP status code specifically indicates that a resource was successfully created (typically following a POST request)?",
    options: ["200 OK", "201 Created", "202 Accepted", "204 No Content"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "201 Created is the standard response for a successful POST request that results in the creation of a new resource.",
  },
  {
    id: 23,
    question: "What does an HTTP 404 status code mean?",
    options: [
      "Internal Server Error",
      "Unauthorized",
      "Not Found",
      "Bad Request",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "404 Not Found indicates that the server cannot find the requested resource (e.g., an invalid endpoint or a non-existent device ID).",
  },
  {
    id: 24,
    question:
      "Which status code indicates that the client provided incorrect or invalid data in their API request?",
    options: [
      "400 Bad Request",
      "401 Unauthorized",
      "403 Forbidden",
      "500 Internal Server Error",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "400 Bad Request indicates that the server cannot process the request due to a client error, such as malformed JSON syntax.",
  },
  {
    id: 25,
    question: "What is the difference between a 401 and a 403 status code?",
    options: [
      "401 means the resource does not exist; 403 means the server has crashed entirely.",
      "401 means authentication failed or is missing; 403 means the client is authenticated but lacks permission.",
      "401 is always a server-side error; 403 is always a client-side error in the request itself.",
      "There is no difference between the two; they are interchangeable and both mean the exact same thing.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "401 Unauthorized means 'I don't know who you are'. 403 Forbidden means 'I know who you are, but you aren't allowed to do this'.",
  },
  {
    id: 26,
    question:
      "Which HTTP status code category indicates an error on the server side?",
    options: ["2xx", "3xx", "4xx", "5xx"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "5xx status codes indicate that the server failed to fulfill an apparently valid request (e.g., 500 Internal Server Error, 503 Service Unavailable).",
  },
  {
    id: 27,
    question: "An API responds with a 429 status code. What does this mean?",
    options: [
      "Method Not Allowed",
      "Too Many Requests (Rate Limiting)",
      "Unsupported Media Type",
      "Gateway Timeout",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "429 Too Many Requests indicates the user has sent too many requests in a given amount of time, a mechanism known as API rate limiting.",
  },
  {
    id: 28,
    question:
      "Which status code indicates a successful request that returns no data in the response body (often seen after a successful DELETE)?",
    options: ["200 OK", "201 Created", "204 No Content", "304 Not Modified"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "204 No Content indicates the server successfully processed the request, but there is no payload to return to the client.",
  },
  {
    id: 29,
    question: "What does an HTTP 503 status code mean?",
    options: [
      "Bad Gateway",
      "Service Unavailable",
      "Gateway Timeout",
      "Internal Server Error",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "503 Service Unavailable indicates the server is currently unable to handle the request due to temporary overloading or maintenance.",
  },
  {
    id: 30,
    question:
      "If you try to use a POST method on an endpoint that only accepts GET requests, which status code should the server return?",
    options: [
      "400 Bad Request",
      "404 Not Found",
      "405 Method Not Allowed",
      "406 Not Acceptable",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "405 Method Not Allowed is returned when the HTTP method specified is not supported for that specific resource.",
  },

  // --- JSON Syntax & Data Types ---
  {
    id: 31,
    question: "What does JSON stand for?",
    options: [
      "Java Standard Output Network",
      "JavaScript Object Notation",
      "Joint System Object Network",
      "JavaScript Oriented Nodes",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format that is easy for humans to read/write and machines to parse/generate.",
  },
  {
    id: 32,
    question: "Which characters are used to enclose a JSON object?",
    options: [
      "Square brackets []",
      "Curly braces {}",
      "Parentheses ()",
      "Angle brackets <>",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A JSON object is an unordered collection of key/value pairs enclosed in curly braces {}.",
  },
  {
    id: 33,
    question: "Which characters are used to enclose a JSON array?",
    options: [
      "Square brackets []",
      "Curly braces {}",
      "Parentheses ()",
      'Quotation marks ""',
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "A JSON array is an ordered list of values enclosed in square brackets [].",
  },
  {
    id: 34,
    question: "In JSON, what character separates a key from its value?",
    options: ["Equals sign =", "Comma ,", "Colon :", "Semicolon ;"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      'A colon (:) separates the key (name) from its corresponding value in a JSON object (e.g., `"interface": "GigabitEthernet1"`).',
  },
  {
    id: 35,
    question: "Which of the following is a valid JSON string?",
    options: ['"hostname"', "'hostname'", "`hostname`", "hostname"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "In JSON, all strings (including keys) MUST be enclosed in double quotes. Single quotes and backticks are invalid.",
  },
  {
    id: 36,
    question: "Which of the following is NOT a valid data type in JSON?",
    options: ["String", "Boolean", "Undefined", "Null"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Valid JSON data types are String, Number, Object, Array, Boolean (true/false), and Null. 'Undefined' is a JavaScript concept, not a JSON data type.",
  },
  {
    id: 37,
    question: "How is a boolean value correctly formatted in JSON?",
    options: ['"True"', "True", "true", "TRUE"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Boolean values in JSON must be all lowercase (`true` or `false`) and must NOT be enclosed in quotes.",
  },
  {
    id: 38,
    question: "Which of the following is a valid JSON number format?",
    options: ['"42"', "42", "0x2A", "42.0f"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "JSON numbers are written without quotes (e.g., 42 or 3.14). Hexadecimal and specific type suffixes (like 'f') are not supported in standard JSON.",
  },
  {
    id: 39,
    question:
      "How are multiple key-value pairs separated within a JSON object?",
    options: ["By a semicolon ;", "By a colon :", "By a space", "By a comma ,"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Commas separate individual key-value pairs within an object, and individual items within an array.",
  },
  {
    id: 40,
    question:
      "Is whitespace (spaces, tabs, newlines) outside of strings syntactically significant in JSON?",
    options: [
      "Yes, JSON relies on indentation to define the structure like Python does.",
      "Yes, newlines are strictly forbidden and will cause a parse error.",
      "No, JSON ignores structural whitespace, allowing it to be minified or 'pretty-printed'.",
      "No, but spaces must replace all tabs before the data can be parsed.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "JSON ignores whitespace outside of strings. It can be formatted with line breaks and indents for readability (pretty-printed) or compressed into a single line (minified).",
  },
  {
    id: 41,
    question:
      "Which of the following represents a perfectly valid, empty JSON object?",
    options: ["[]", "{}", "null", '""'],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "An empty object is represented by empty curly braces `{}`.",
  },
  {
    id: 42,
    question:
      'Examine this JSON snippet: `{ "ports": [22, 80, 443] }`. What data type is the value associated with the key "ports"?',
    options: ["Object", "String", "Array", "Number"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The value is enclosed in square brackets `[]`, making it a JSON Array of numbers.",
  },
  {
    id: 43,
    question: "Which of the following is NOT valid JSON syntax?",
    options: [
      '{ "status": "up" }',
      '{ "vlan": 10 }',
      '{ "enabled": true }',
      "{ 'protocol': 'OSPF' }",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "JSON strictly requires double quotes for strings and keys. Single quotes (`'`) make the JSON invalid.",
  },
  {
    id: 44,
    question:
      "Which of the following is a common error that makes JSON invalid?",
    options: [
      "Nesting an object inside an array of objects in the data",
      "Having a trailing comma after the last key-value pair in an object",
      "Using the null keyword as a value in the object",
      "Using an array as the root element of the entire document",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Unlike some programming languages (like Python or JS), standard JSON does not allow a trailing comma before the closing brace `}` or bracket `]`.",
  },
  {
    id: 45,
    question: "How do you represent a missing or empty value in JSON?",
    options: ["none", "NaN", "null", "nil"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The `null` keyword is used in JSON to represent an empty or missing value. It must be lowercase and unquoted.",
  },
  {
    id: 46,
    question:
      "If a JSON string must contain a literal double quote character, how is it formatted?",
    options: [
      "By using single quotes instead",
      'By escaping it with a backslash `\\"`',
      'By using two double quotes `""`',
      "Double quotes cannot exist inside a JSON string",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      'Special characters inside a JSON string must be escaped with a backslash. E.g., `"The device \\"Switch1\\" is down"`.',
  },
  {
    id: 47,
    question: "What is 'minified' JSON?",
    options: [
      "JSON that has been encrypted so its contents cannot be read.",
      "JSON with all unnecessary whitespace and newlines removed to reduce file size.",
      "JSON that has been converted to a binary format for faster transmission.",
      "JSON that has had all of its array structures stripped away.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Minified JSON removes all spaces, tabs, and newlines that are not inside strings, making the payload smaller for network transmission.",
  },
  {
    id: 48,
    question: "What is 'Serialization' in the context of REST APIs?",
    options: [
      "Encrypting data over HTTPS so that it cannot be intercepted or read during its transmission across the public network to the remote server.",
      "Converting data from an application's native format (like a Python dictionary) into a format suitable for transmission (like a JSON string).",
      "Parsing a JSON string back into a native Python object after it has been received from the remote API server over the network.",
      "Assigning serial numbers to network packets so that they can be tracked and reordered during their delivery across the network from end to end.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Serialization translates native code objects into a JSON or XML string format. Deserialization is the reverse process.",
  },
  {
    id: 49,
    question:
      "In Python, which library is built-in for handling JSON serialization and deserialization?",
    options: ["rest", "xml", "json", "requests"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The `json` library is included in Python's standard library (using `json.loads()` to parse and `json.dumps()` to serialize).",
  },
  {
    id: 50,
    question:
      "Which data format uses tags like `<device><name>Router1</name></device>` instead of curly braces?",
    options: ["JSON", "YAML", "XML", "CSV"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Extensible Markup Language (XML) relies on opening and closing angle-bracket tags to structure data, whereas JSON uses braces and brackets.",
  },

  // --- API Authentication & Security ---
  {
    id: 51,
    question:
      "Which authentication method sends the username and password encoded in Base64 in the HTTP headers?",
    options: ["OAuth 2.0", "API Keys", "Basic Authentication", "Bearer Tokens"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Basic Authentication encodes the 'username:password' string in Base64. Because it is easily decoded, it must always be used over HTTPS.",
  },
  {
    id: 52,
    question: "What is a Bearer Token?",
    options: [
      "A hardware security key that must be plugged into the client's computer to unlock the API.",
      "A cryptic string representing a user's session or authorization, sent in the HTTP Authorization header.",
      "A username and password combination that is sent along with every single API request.",
      "A digital certificate that is installed on the router or switch to verify its identity.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A Bearer Token is a temporary token granted by the server after initial login. The client includes it in the `Authorization: Bearer <token>` header for subsequent requests.",
  },
  {
    id: 53,
    question:
      "Why are API tokens generally preferred over Basic Authentication (sending usernames and passwords)?",
    options: [
      "Tokens never expire, so they do not need to be refreshed or rotated at any point in time.",
      "Tokens do not require HTTPS because they are already fully encrypted before being sent.",
      "Tokens can be revoked, expire automatically, and limit the exposure of the actual user credentials.",
      "Tokens are faster to compute than a full authentication handshake between the systems.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "API tokens provide a layer of security by abstracting the user credentials. If a token is stolen, it can be revoked without needing to change the user's main password.",
  },
  {
    id: 54,
    question:
      "Which modern authorization framework allows a third-party application to obtain limited access to an HTTP service without sharing the user's credentials?",
    options: ["Basic Auth", "OAuth 2.0", "SNMPv3", "RADIUS"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "OAuth 2.0 is an industry-standard authorization protocol that delegates authentication to a secure server and issues access tokens to third-party apps.",
  },
  {
    id: 55,
    question: "How is an API Key typically passed from a client to a server?",
    options: [
      "Only in the URI query string of every single request.",
      "Only in the Request Body of the POST request itself.",
      "In a custom HTTP Header or as a query parameter in the URI.",
      "Via an out-of-band email message to the server.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "API keys are usually passed via an HTTP header (like `X-API-Key`) or appended to the URL as a query parameter (e.g., `?apikey=12345`).",
  },

  // --- Automation Tools: Postman, cURL, Python ---
  {
    id: 56,
    question: "What is Postman used for in network automation?",
    options: [
      "It is a Python library that is used for making SSH connections to network devices.",
      "It is an IDE that is used for writing, testing, and debugging Python code.",
      "It is a GUI application used to test, build, and interact with REST APIs without writing code.",
      "It is a Cisco proprietary protocol that is used for building the SD-WAN fabric.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Postman is a popular API client that provides a user-friendly graphical interface to construct HTTP requests, inspect responses, and save API collections.",
  },
  {
    id: 57,
    question: "In Postman, what is the purpose of an 'Environment'?",
    options: [
      "To change the user interface theme from light to dark appearance, which makes the requests easier to view and read on screen.",
      "To store variables (like API keys or IP addresses) that can be easily switched depending on the target network (e.g., Dev vs. Prod).",
      "To compile the Python scripts so that they can be executed directly without needing a separate interpreter to be installed on the machine.",
      "To limit the amount of bandwidth used by API calls so that the network remains responsive for every other user connected to it.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Environments allow you to use variables (like `{{base_url}}`) in your API requests, letting you easily switch context between different servers without rewriting the requests.",
  },
  {
    id: 58,
    question:
      "Which command-line tool is widely used on Linux/macOS to send HTTP requests to REST APIs?",
    options: ["ping", "traceroute", "curl", "nmap"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "cURL (Client URL) is a versatile command-line tool used to transfer data over various network protocols, heavily used for testing REST APIs.",
  },
  {
    id: 59,
    question: "In a cURL command, what does the `-X` flag specify?",
    options: [
      "The HTTP Header",
      "The Request Body",
      "The HTTP Method (e.g., GET, POST)",
      "The SSL Certificate",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The `-X` (or `--request`) flag specifies the HTTP method to use, such as `curl -X POST ...`. If omitted, cURL defaults to GET.",
  },
  {
    id: 60,
    question: "In a cURL command, what does the `-H` flag specify?",
    options: [
      "A custom HTTP Header",
      "The Target Host",
      "The Request Body",
      "Help menu",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      'The `-H` flag is used to pass custom HTTP headers, such as `curl -H "Content-Type: application/json" ...`.',
  },
  {
    id: 61,
    question:
      "Which Python library is considered the industry standard for sending HTTP requests to REST APIs?",
    options: ["netmiko", "paramiko", "requests", "socket"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The `requests` library is the most popular Python package for interacting with web services and REST APIs due to its simplicity.",
  },
  {
    id: 62,
    question:
      "In Python's `requests` library, how do you easily parse a JSON response into a Python dictionary?",
    options: [
      "response.text",
      "response.to_dict()",
      "response.json()",
      "json.loads(response)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The `requests` library provides a built-in `.json()` method on the response object, which automatically deserializes the JSON payload into a Python dictionary.",
  },
  {
    id: 63,
    question:
      "If a REST API server uses a self-signed SSL certificate, the Python `requests` library will throw an error by default. How can you bypass this?",
    options: [
      "Pass `verify=False` in the request method.",
      "Pass `ssl=Ignore` in the request method.",
      "Use HTTP instead of HTTPS.",
      "It cannot be bypassed in Python.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Using `requests.get(url, verify=False)` tells the library to ignore SSL certificate validation warnings, commonly used in lab environments.",
  },
  {
    id: 64,
    question:
      "What is the equivalent flag in cURL to ignore SSL certificate warnings (`verify=False` in Python)?",
    options: ["-v", "-i", "-k", "-s"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The `-k` (or `--insecure`) flag tells cURL to proceed and operate even for server connections considered otherwise insecure.",
  },
  {
    id: 65,
    question:
      "What does `response.status_code` return in Python's `requests` library?",
    options: [
      "The execution time of the script.",
      "The integer HTTP status code (e.g., 200, 404).",
      "The text description of the status (e.g., 'Not Found').",
      "A boolean indicating True or False.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "It returns the numerical HTTP status code sent back by the API server.",
  },

  // --- Cisco-Specific APIs & SDN Context ---
  {
    id: 66,
    question:
      "In Cisco DNA Center, which type of API allows external applications (like scripts or IT service management tools) to extract data and control the controller?",
    options: [
      "Southbound API",
      "Northbound API",
      "Eastbound API",
      "Westbound API",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Northbound APIs interface with higher-level applications and scripts. Southbound APIs are used by the controller to talk to the physical network devices.",
  },
  {
    id: 67,
    question:
      "What protocol does the Cisco DNA Center Northbound API primarily use?",
    options: ["NETCONF", "REST (over HTTPS)", "SNMP", "gRPC"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Cisco DNA Center Intent APIs are RESTful APIs utilizing HTTPS for transport and JSON for payloads.",
  },
  {
    id: 68,
    question: "How do you authenticate to the Cisco DNA Center REST API?",
    options: [
      "By sending a username and password with every single request that is made to the controller of the fabric.",
      "By sending Basic Auth to the `/token` endpoint to receive a temporary JWT (Token), which is used for subsequent requests.",
      "By installing an SSH key on the controller and using it to authenticate each and every session that gets opened with the API.",
      "By disabling HTTPS so that the API calls can be made over a plain, unencrypted HTTP connection instead of HTTPS.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "DNA Center requires a two-step process: First, you POST Basic Auth credentials to `/dna/system/api/v1/auth/token` to receive a token. Then, you pass that token in the `X-Auth-Token` header for API calls.",
  },
  {
    id: 69,
    question: "What is the Cisco Meraki Dashboard API?",
    options: [
      "A CLI tool for configuring Meraki switches by connecting via console cables.",
      "A RESTful API used to programmatically manage and monitor Meraki cloud-managed networks.",
      "An SNMP MIB that is used to monitor and manage Meraki network routers.",
      "A Python library used for network automation tasks.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Meraki Dashboard API is a REST API that allows you to automate the configuration and monitoring of Meraki devices via the cloud.",
  },
  {
    id: 70,
    question:
      "How is authentication handled in the Cisco Meraki Dashboard API?",
    options: [
      "Via an API key passed in the `X-Cisco-Meraki-API-Key` HTTP header.",
      "Via the OAuth 2.0 authorization framework only.",
      "Via Basic Authentication with credentials encoded in Base64.",
      "Via a dynamically generated JSON Web Token that refreshes often.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Meraki requires a static API key generated in the dashboard, which must be included in the `X-Cisco-Meraki-API-Key` header of every API request.",
  },
  {
    id: 71,
    question:
      "In Cisco SD-WAN, which component provides the REST API used by administrators to configure the entire SD-WAN fabric?",
    options: ["vEdge", "vSmart", "vManage", "vBond"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "vManage is the management plane controller in Cisco SD-WAN. It hosts the REST API used for all programmatic configuration and monitoring.",
  },
  {
    id: 72,
    question:
      "How does authentication typically work with the Cisco SD-WAN vManage REST API?",
    options: [
      "It requires a Meraki API key to be passed in the headers of every call.",
      "It uses session-based authentication (Cookies) after posting credentials to the `/j_security_check` endpoint.",
      "It uses no authentication internally, so the API is completely open to anyone who can reach it.",
      "It requires mutual TLS certificates to be installed on the client script.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "To authenticate with vManage, you typically POST credentials to `/j_security_check` to receive a JSESSIONID cookie, and potentially an X-XSRF-TOKEN for protection, which are passed in subsequent requests.",
  },
  {
    id: 73,
    question:
      "What format does Cisco DNA Center use for data returned from its REST APIs?",
    options: ["XML", "YAML", "JSON", "CSV"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Like most modern REST APIs, Cisco DNA Center standardizes on JSON (JavaScript Object Notation) for its data payloads.",
  },
  {
    id: 74,
    question:
      "What happens if a REST API request to DNA Center uses an expired authentication token?",
    options: [
      "It returns a 401 Unauthorized status code.",
      "It returns a 404 Not Found status code.",
      "It prompts the user via a pop-up GUI.",
      "It completes the request but warns the user.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "If the token has expired, the server does not recognize the authorization and returns a 401 Unauthorized error.",
  },
  {
    id: 75,
    question:
      "Which Python function is used to convert a Python dictionary into a JSON formatted string before sending it in a POST request?",
    options: ["json.loads()", "json.dumps()", "dict.to_json()", "json.parse()"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "`json.dumps()` (dump string) takes a Python dictionary and serializes it into a JSON string. `json.loads()` does the reverse.",
  },

  // --- Advanced JSON & REST Scenarios ---
  {
    id: 76,
    question:
      'Examine this JSON: `{ "interfaces": [ { "name": "G0/1", "status": "up" }, { "name": "G0/2", "status": "down" } ] }`. What type of structure is associated with the key "interfaces"?',
    options: [
      "A string",
      "An array of objects",
      "An object of arrays",
      "A boolean",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The key 'interfaces' holds a list `[...]`, and inside that list are multiple sets of key-value pairs enclosed in `{...}`, making it an array of objects.",
  },
  {
    id: 77,
    question:
      "In the URL `https://api.example.com/v2/devices/12345`, what is `12345` an example of?",
    options: [
      "A query parameter",
      "A path variable",
      "An HTTP header",
      "A Base64 string",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Unlike query parameters (`?id=12345`), a path variable is embedded directly into the URL path to identify a specific resource.",
  },
  {
    id: 78,
    question: "Which of the following describes a 'Webhook'?",
    options: [
      "A client that polls the server every five seconds to check for new updates.",
      "A server-to-server HTTP POST request triggered by an event, acting as a 'reverse API'.",
      "A hardware appliance that is used for filtering incoming REST API traffic.",
      "A JSON validation tool used to check the syntax of payloads.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Webhooks allow applications to send automated messages or data to other applications in real-time as events happen, rather than the client having to constantly poll an API.",
  },
  {
    id: 79,
    question:
      "You want to retrieve a list of switches from DNA Center, but only those in the 'San Jose' site. How should this information be passed in the REST request?",
    options: [
      "In the Authorization header.",
      "As a query parameter (e.g., `?location=SanJose`).",
      "In the HTTP body of a GET request.",
      "By changing the HTTP method to SEARCH.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "When filtering data on a GET request, the standard REST practice is to use query parameters appended to the URL.",
  },
  {
    id: 80,
    question:
      "What is typically the result of making a PUT request to a REST API resource, but leaving out a field that previously existed on the resource?",
    options: [
      "The server preserves the old field and keeps its original value.",
      "The server returns a 404 error for the missing field immediately.",
      "The server replaces the entire resource, effectively deleting the omitted field.",
      "The server duplicates the resource and returns both copies.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "PUT is designed to replace the target resource entirely with the new payload. If a field is omitted in the PUT payload, it is removed from the resource. (PATCH would preserve it).",
  },

  // --- Deeper Dive: Protocols & Concepts ---
  {
    id: 81,
    question:
      "Which HTTP status code signifies that a request was redirected to a new URL?",
    options: [
      "202 Accepted",
      "301 Moved Permanently",
      "400 Bad Request",
      "502 Bad Gateway",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Status codes in the 3xx range, such as 301 and 302, indicate redirection to another endpoint.",
  },
  {
    id: 82,
    question:
      "What data type does a JSON API typically return for an IP address?",
    options: [
      "An IP Address object",
      'A String (e.g., "192.168.1.1")',
      "An Array of integers",
      "A Boolean",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "JSON has no specific data type for IP addresses, so they are formatted and transmitted as standard strings wrapped in quotes.",
  },
  {
    id: 83,
    question:
      "What does the `Content-Type: application/x-www-form-urlencoded` header indicate?",
    options: [
      "The payload is JSON and must be parsed as JSON by the client application.",
      "The payload is XML and uses angle bracket tags to define its structure.",
      "The payload is formatted as key-value pairs separated by '&', like a web form submission.",
      "The payload is an uploaded file that is sent as raw binary data in the body.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Form-urlencoded is a common format where data is sent similarly to query parameters (key=value&key2=value2) in the request body.",
  },
  {
    id: 84,
    question:
      "Which software design principle ensures that the client does not need to know the internal logic or database structure of the server to interact with the API?",
    options: [
      "Abstraction / Information Hiding",
      "Statelessness (no session state on server)",
      "Idempotency (same request, same result)",
      "Pagination (splitting results into pages)",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "APIs provide abstraction. The client sends a REST request, and the server handles the complex backend SQL/logic without exposing it to the client.",
  },
  {
    id: 85,
    question: "What is 'Base64' encoding commonly used for in REST APIs?",
    options: [
      "Encrypting the JSON payloads so that nobody can read them.",
      "Compressing the data to save on network bandwidth.",
      "Encoding the username and password in Basic Authentication headers.",
      "Translating IPv6 addresses into IPv4 for older devices.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Basic Authentication combines the username and password into a `user:pass` format and encodes it into a Base64 string. Base64 is encoding, not encryption.",
  },
  {
    id: 86,
    question:
      "In Python, which keyword allows you to pass a dictionary as JSON data in the `requests.post()` method natively?",
    options: ["data=", "payload=", "json=", "body="],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Using `requests.post(url, json=my_dict)` automatically serializes the dictionary to a JSON string and adds the `Content-Type: application/json` header.",
  },
  {
    id: 87,
    question:
      "What is the primary difference between a REST API and a SOAP API?",
    options: [
      "SOAP uses JSON for all of its messages and headers, while REST is restricted to using only the XML data format instead.",
      "SOAP is a strict protocol with rigid XML standards; REST is an architectural style that supports multiple formats like JSON.",
      "REST is obsolete and outdated, while SOAP is the modern standard that all new APIs and web services should use today.",
      "SOAP runs over UDP for speed, while REST always runs over TCP for reliability.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "SOAP (Simple Object Access Protocol) is highly structured and relies exclusively on XML. REST is more flexible, lighter, and almost universally uses JSON.",
  },
  {
    id: 88,
    question:
      'If a JSON key contains a space, such as `"interface name" : "G0/1"`, is this valid JSON?',
    options: [
      "Yes, because keys are strings and can contain spaces.",
      "No, keys cannot contain spaces.",
      "Only if it is enclosed in single quotes.",
      "Yes, but the space must be escaped with a backslash.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "As long as the key is enclosed in double quotes, it is a valid string and can contain spaces. (Though standard programming practices suggest avoiding it).",
  },
  {
    id: 89,
    question:
      "Which of the following is true regarding APIs and SDN (Software Defined Networking)?",
    options: [
      "SDN replaces APIs entirely and makes use of no programmatic interfaces whatsoever to control the network.",
      "Controllers expose Northbound APIs for orchestration, and use Southbound APIs to program the network devices.",
      "APIs are only used within the Data Plane of the SDN architecture to forward the actual traffic.",
      "APIs require BGP to function correctly within the SDN architecture for the control plane.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In SDN architectures, APIs are the connective tissue. Northbound APIs allow apps to control the controller; Southbound APIs (like NETCONF/RESTCONF) allow the controller to configure the switches/routers.",
  },
  {
    id: 90,
    question:
      "Which of the following HTTP response headers tells the client how much data is in the response body?",
    options: [
      "Content-Type",
      "Content-Length",
      "Cache-Control",
      "Accept-Encoding",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The `Content-Length` header indicates the size of the response body in bytes.",
  },

  // --- JSON & API Scenario Questions ---
  {
    id: 91,
    question:
      "You send a GET request and receive a 500 status code. What is the most appropriate next step?",
    options: [
      "Check your JSON payload for syntax errors in the request body.",
      "Check your authentication token for validity and expiration.",
      "Investigate the server logs, as the server encountered an unexpected error.",
      "Ensure the resource ID exists on the server before retrying.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "A 5xx error means the server failed to process a seemingly valid request. The issue lies on the server side (e.g., database crash, code bug), not the client side.",
  },
  {
    id: 92,
    question:
      "You send a POST request with valid authentication but receive a 400 status code. What is the likely cause?",
    options: [
      "The server is down and is not responding at all.",
      "Your authentication token has expired and needs to be renewed.",
      "The JSON body you sent is malformed or missing required fields.",
      "You lack the admin privileges required for the operation.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "400 Bad Request indicates client error with the request structure or payload. 401 handles expired tokens, and 403 handles lack of privileges.",
  },
  {
    id: 93,
    question: "Which of the following JSON arrays is formatted correctly?",
    options: [
      '["Router1", "Router2", "Router3",]',
      '["Router1" : "Router2" : "Router3"]',
      '["Router1", "Router2", "Router3"]',
      '{"Router1", "Router2", "Router3"}',
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "An array uses square brackets `[]` and separates string elements with commas without a trailing comma.",
  },
  {
    id: 94,
    question: "What is an OpenAPI Specification (formerly Swagger)?",
    options: [
      "A programming language that is used for creating and testing APIs.",
      "A standard, language-agnostic format for describing and documenting REST APIs.",
      "A Cisco proprietary API gateway for network automation.",
      "An alternative to JSON that is used to structure data.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "OpenAPI provides a standardized way to document API endpoints, required parameters, and expected JSON responses so developers understand how to interact with it.",
  },
  {
    id: 95,
    question:
      "You use cURL to GET a resource, but the response is a single, unformatted, massive block of text. What is this?",
    options: [
      "An encrypted JSON payload.",
      "Minified JSON.",
      "A corrupted payload.",
      "XML data.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "When JSON is transmitted, it is often minified (all newlines and indentations removed) to save bandwidth. Tools like Postman or Python can 'pretty-print' it.",
  },
  {
    id: 96,
    question:
      "When automating Cisco devices using REST APIs, what does 'Stateless' mean for your Python script?",
    options: [
      "The script must use UDP instead of TCP for all of its API requests, because the stateless protocol does not support TCP connections at all.",
      "The script cannot use variables to store data between different requests, so all of its internal state must be recomputed from scratch each and every time.",
      "The script must authenticate and provide all necessary context in every single HTTP request, because the controller does not remember previous requests.",
      "The script must not save any files to the local hard drive, because doing so would break the stateless requirement that the REST API relies upon for every call.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Because REST is stateless, each HTTP request is independent. The server doesn't remember what you did 5 seconds ago; your request must include the authentication token and full context.",
  },
  {
    id: 97,
    question:
      'A JSON file contains `{ "vlan": 10, "name": "Data", "active": true }`. If a Python script loads this into a dictionary named `data`, how do you access the VLAN number?',
    options: ["data.vlan", "data[0]", 'data["vlan"]', "data{vlan}"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      'In Python, values from a parsed JSON dictionary are accessed using bracket notation with the string key name, e.g., `data["vlan"]`.',
  },
  {
    id: 98,
    question:
      "Which of the following describes 'Rate Limiting' in the context of network programmability?",
    options: [
      "Restricting the speed of the physical switch ports on the network devices in order to reduce the overall throughput.",
      "An API server restricting the number of API calls a client can make within a specific time window to prevent overload.",
      "Limiting the maximum size of the JSON payload that can be sent to the server in a single API request at any one time at all.",
      "Restricting access to certain IP addresses by using network ACLs that are configured on the network devices themselves.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "API Rate limiting protects the server from DDoS attacks or runaway scripts by capping requests (e.g., 100 requests per minute).",
  },
  {
    id: 99,
    question:
      "If your Python script receives a 429 status code from Meraki, what should the script be programmed to do?",
    options: [
      "Halt immediately and delete the API key from the configuration.",
      "Retry the request immediately and infinitely until it finally succeeds in being processed.",
      "Pause (sleep) for a short duration and then retry the request, honoring the 'Retry-After' header.",
      "Change the HTTP method from GET to POST and try the request again.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "A 429 means 'Too Many Requests'. Robust automation scripts will catch this code, wait the amount of time specified by the API (often in a `Retry-After` header), and try again.",
  },
  {
    id: 100,
    question:
      "Which component of an HTTP request determines the intended action (e.g., read vs. create) to be performed on the target resource?",
    options: [
      "The URI Path",
      "The Query Parameter",
      "The HTTP Method (Verb)",
      "The HTTP Header",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The HTTP Method (or Verb) like GET, POST, PUT, or DELETE defines the specific action the client wants the server to take on the resource identified by the URI.",
  },
];
