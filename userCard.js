class UserCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `John Doe`;
    }
}

/**
 * Represents a book.
 * @param {string} tag - Takes in name of the tag 
 * @param {string} class name object - Takes in the class name object is going to connect to
 */
window.customElements.define('user-card', UserCard);