import * as React from 'react';
import './index.css';

export class SearchFeed extends React.Component {
  render() {
    return (
      <aside id="searchfeed" className="column column-25">
        <form>
          <fieldset>
            <input
              type="text"
              placeholder="Search"
              id="nameField"
            />
          </fieldset>
        </form>

      </aside>
    );
  }
}
