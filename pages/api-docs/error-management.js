import React from 'react';
import Highlight from 'react-highlight';
import ApiDocs from './index';

const ErrorManagement = () => (
  <ApiDocs>
    <header>
      <h3>Error management</h3>
    </header>
    <p>When an error occurs while performing a request to the REST API, all the responses contain an <code>error</code> and a <code>message</code> properties. The first one is a unique error code that never changes, and the second is a human-friendly error that helps to know what happened while debugging.</p>

    <Highlight className="json">
      {`{
  "error": "INVALID_ARGUMENT",
  "message": "You have to provide both \\"username\\" and \\"password\\""
}`}
    </Highlight>

    <p>Error interpretation depends on the context and the endpoint. Every endpoint includes the documentation for its specific errors.</p>
    <p>Depending on the error, a specific status code will be returned, using 400 for validation errors, 401 for authentication errors and 500 for other server or unexpected errors.</p>
    <p>An error will never have a status 200.</p>
  </ApiDocs>
);

export default ErrorManagement;
