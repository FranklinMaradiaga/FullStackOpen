sequenceDiagram
participant browser
participant server

    Note right of browser: User enters note content
    browser->>browser: Fill in text field
    browser->>browser: Click submit button

    Note right of browser: The browser sends a request to create a new note

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: { "message": "Note created successfully" }
    deactivate server

    Note right of browser: The browser updates the view to display the new note

    Note right of browser: User continues interacting with the single-page app
