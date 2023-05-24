See [Notes Diagram](./notes-diagram.md) for more information.

participant browser
participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    active server
    server->>browser: HTML document
    deactivate server
