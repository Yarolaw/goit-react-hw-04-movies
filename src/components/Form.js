import  { Component } from 'react';

class Form extends Component {
    state = { query: '' }
    
    handleChangeQuery = e => this.setState({ query: e.currentTarget.value });

    submitForm = e => {
        e.preventDefault()
        const { query  } =this.state

        const { onSubmit } = this.props
        onSubmit(query)
        this.setState({ query: ''})
    }

    render() {
        const {query} = this.state

        return (   <form className="SearchForm" onSubmit={this.submitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            value={query}
            autoFocus
            placeholder="Search movies"
            onChange={this.handleChangeQuery}
          />
        </form> );
    }
}
 
export default Form;