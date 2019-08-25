import React from 'react';
import ApiDocs from "./index";
import Highlight from "react-highlight";

const Authentication = () => (
  <ApiDocs>
    <header>
      <h3>Authentication</h3>
    </header>
    <p>All endpoints require authentication. In order to do it, always provide a <code>X-Api-Key: [api_key]</code> header on every request.</p>
    <p>API keys are generated (and managed) from the command line. Run the <code>api-key:generate</code> command to get a new and valid API key.</p>

    <blockquote>
      <p>Previous to shlink <b>v1.13.0</b>, it was also possible to call to the special <code>/rest/authenticate</code> endpoint, which expects an API key to be provided and returns a token which expires in a week.</p>

      <p>You had to pass it on every request in the <code>Authorization: Bearer [token]</code> header, and every response returned the <code>Authorization</code> header as well, with a refreshed token which will last another week.</p>
      <p>This authentication method will keep working on any Shlink v1.*, but it is considered <b>deprecated</b> and will be removed on v2.</p>
    </blockquote>

    <h4>Errors during authentication</h4>
    <p>When using the <code>X-Api-Key</code> mechanism, if no API key is provided or it is invalid, the server will return this, with status 401.</p>
    <Highlight className="json">
      {`{
  "error": "INVALID_API_KEY",
  "message": "Provided API key does not exist or is invalid"
}`}
    </Highlight>

    <p>When using the <code>Authorization</code> mechanism, if a token is not provided or the token has expired, the server will return an error like this, with a status 401:</p>
    <Highlight className="json">
      {`{
  "error": "INVALID_AUTH_TOKEN",
  "message": "Missing or invalid auth token provided. Perform a new authentication request and send provided token on every new request on the \\"Authorization\\" header"
}`}
    </Highlight>

    <p>If the token was properly provided in the <code>Authorization</code> header but the authorization type is missing or has any value different than <code>Bearer</code>, the server will return one of these errors, with status 401.</p>
    <Highlight className="json">
      {`{
  "error": "INVALID_AUTHORIZATION",
  "message": "You need to provide the Bearer type in the Authorization header."
}`}
    </Highlight>
    <Highlight className="json">
      {`{
  "error": "INVALID_AUTHORIZATION",
  "message": "Provided authorization type &lt;type&gt; is not supported. Use Bearer instead."
}`}
    </Highlight>
  </ApiDocs>
);

export default Authentication;
