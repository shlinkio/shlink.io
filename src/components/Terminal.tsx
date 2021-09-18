import { FunctionComponent } from 'react';
import Typed from 'react-typed';
import FakeBrowser from './FakeBrowser';

interface IStrings {
  cli: string[];
  rest: string[];
}
const prompt = '{<span class="yellow">15:32</span>} <span class="black">~$</span>';
const strings: IStrings = {
  cli: [
    `\`${prompt}\` ^100 shlink short-url:generate https://shlink.io ^500 `
    + '`<br>Processed URL: <span class="green">https://shlink.io</span>'
    + '<br>Generated URL: <span class="green">https://doma.in/rY9k</span>'
    + `<br>${prompt}\` ^200 shlink short-url:parse rY9k ^250 `
    + '`<br>Long URL: <span class="green">https://shlink.io</span>'
    + `<br>${prompt}\` ^200 shlink short-url:visits rY9k ^250 `
    + '`<br>+---------+------+------------+---------+'
    + '<br>| <span class="green">Referer</span> | <span class="green">Date</span> | <span class="green">User agent</span> | <span class="green">Country</span> |'
    + '<br>+---------+------+------------+---------+`',
  ],
  rest: [
    '<span class="yellow">POST</span> https://doma.in/rest/v1/short-urls'
    + '<br><span class="black">Accept:</span> application/json'
    + '<br><span class="black">X-Api-Key:</span> `f3713597-8b14-4144-a49c-b26eb6e06b09`'
    + '<br>'
    + '<br>`{ <span class="black">"longUrl"</span>: <span class="green">"https://shlink.io"</span> }` ^500'
    + '<br>'
    + '<br>`{'
    + '<br>&nbsp;&nbsp;<span class="black">"shortCode"</span>: <span class="green">"rY9k"</span>,'
    + '<br>&nbsp;&nbsp;<span class="black">"shortUrl"</span>: <span class="green">"https://doma.in/rY9k"</span>,'
    + '<br>&nbsp;&nbsp;<span class="black">"longUrl"</span>: <span class="green">"https://shlink.io"</span>,'
    + '<br>&nbsp;&nbsp;<span class="black">"dateCreated"</span>: <span class="green">"2016-05-02T17:49:53+02:00"</span>,'
    + '<br>&nbsp;&nbsp;<span class="black">"visitsCount"</span>: 0,'
    + '<br>&nbsp;&nbsp;<span class="black">"tags"</span>: [],'
    + '<br>&nbsp;&nbsp;<span class="black">"meta"</span>: {}'
    + '<br>}`',
    '<span class="yellow">GET</span> https://doma.in/rest/v1/short-urls/rY9k/visits'
    + '<br><span class="black">Accept:</span> application/json'
    + '<br><span class="black">X-Api-Key:</span> `f3713597-8b14-4144-a49c-b26eb6e06b09` ^500'
    + '<br>'
    + '<br>`{'
    + '<br>&nbsp;&nbsp;<span class="black">"visits"</span>: {'
    + '<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="black">"data"</span>: ['
    + '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'
    + '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="black">"referer"</span>: <span class="green">""</span>,'
    + '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="black">"visitLocation"</span>: {}'
    + '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}'
    + '<br>&nbsp;&nbsp;&nbsp;&nbsp;],'
    + '<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="black">"pagination"</span>: {},'
    + '<br>&nbsp;&nbsp;}`'
    + '<br>}`',
  ],
};

interface TerminalProps {
  id: keyof IStrings;
}

const Terminal: FunctionComponent<TerminalProps> = ({ id }) => {
  const typedOptions = {
    typeSpeed: 100,
    loop: true,
    fadeOut: true,
    fadeOutDelay: 0,
    backDelay: 2000,
  };

  return (
    <FakeBrowser>
      <div className={`terminal ${id}`}>
        <Typed strings={strings[id] || []} {...typedOptions} />
      </div>
    </FakeBrowser>
  );
};

export default Terminal;
