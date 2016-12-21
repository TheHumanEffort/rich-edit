import React from 'react';
import ReactDOM from 'react-dom';

import BasicHtmlEditor from '../src/BasicHtmlEditor';

let html = `
  <h1>This is a Title</h1>
  <p>Here's some text, it's useful</p>
  <p>More text, some inline <strong>styling</strong> for <em>some</em> elements</p>
`;

class BasicHtmlEditorExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: props.html,
    };
  }

  updateHtml(html, json) {
    this.setState({
      html, json,
    });
  }

  render() {
    return (
      <div>
        <BasicHtmlEditor
          value={ this.state.html }
          onChange={ (html, raw) => this.updateHtml(html, raw) }
          debounce={ 500 }
        />
        <div style={{ margin: '30px 10px 10px 10px' }}>
          <code>Exported HTML</code>
          <hr/>
          <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
          <hr/>
          <code>Exported JSON:</code>
          <hr/>
          <div>{ JSON.stringify(this.state.json) }</div>
        </div>
      </div>
    );
  }

}

ReactDOM.render(
  <BasicHtmlEditorExample html={html}/>,
  document.getElementById('app')
);
