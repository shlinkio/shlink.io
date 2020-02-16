import React, { FunctionComponent } from 'react';
import Highlight from 'react-highlight';
import { ExternalLink } from 'react-external-link';
import ApiDocs from './index';

const ErrorManagement: FunctionComponent = () => (
  <ApiDocs>
    <header>
      <h2>Error management</h2>
    </header>
    <p>
      {'Shlink\'s'} REST API implements
      the <ExternalLink href="https://tools.ietf.org/html/rfc7807">Problem Details</ExternalLink> standard for error
      management.
    </p>
    <p>
      Because of this, al error response will have <code>Content-Type: application/problem+json</code>, and the
      payload will have the next properties:
    </p>
    <ul>
      <li><code>type</code>: A unique error code identifying the error.</li>
      <li><code>detail</code>: A human-friendly description of the error.</li>
      <li><code>title</code>: A short unique error title.</li>
      <li><code>status</code>: The same value returned as the responses status code.</li>
    </ul>

    <Highlight className="json">
      {`{
  "type": "TAG_NOT_FOUND",
  "detail": "Tag with name \\"foo\\" could not be found",
  "title": "Tag not found",
  "status": 404
}`}
    </Highlight>

    <p>Some errors can have extra properties, depending on their nature.</p>
    <Highlight className="json">
      {`{
  "type": "INVALID_SLUG",
  "detail": "Provided slug \\"custom\\" is already in use",
  "title": "Invalid custom slug",
  "status": 400,
  "customSlug": "custom"
}`}
    </Highlight>

    <p>
      Error interpretation depends on the context and the endpoint. Every endpoint includes the documentation for its
      specific errors.
    </p>

    <blockquote>
      <p>
        Previous to Shlink <b>v1.21.0</b>, the API did not implement Problem Details. Instead, error responses used to
        contain only two properties, <code>error</code> and <code>message</code>.
      </p>
      <p>
        For backwards compatibility purposes, when consuming API v1 (meaning, the path starts
        with <code>/rest/v1/</code>), both <code>error</code> and <code>message</code> will continue being returned,
        with the same values returned in <code>type</code> and <code>detail</code> respectively.
      </p>
      <p>
        However, when consuming {'API\'s'} v2 (<code>/rest/v2/</code>), which has been introduced in Shlink v1.21.0,
        those two properties will no longer be returned.
      </p>
      <p>
        Starting with Shlink v2.0.0, both versions of the API will behave in the same way, not returning the
        old <code>error</code> and <code>message</code> properties.
      </p>
    </blockquote>
  </ApiDocs>
);

export default ErrorManagement;
