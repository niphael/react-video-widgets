import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class DominionTrailerElement extends HTMLElement {
    connectedCallback() {
        this.mountPoint = document.createElement('div');
        this.appendChild(this.mountPoint);
        ReactDOM.render(<App />, this.mountPoint);
    }
}

customElements.define('dominion-trailer', DominionTrailerElement);

export default DominionTrailerElement;