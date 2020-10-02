import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';

class SearchForm extends Component {
  constructor() {
    super();

    // Creating the initial state of the component
    this.state = {
      description: '',
    };

    // Binding methods to the current object
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    // Getting description from state
    const { description } = this.state;

    // Getting the history object from the props
    const { history } = this.props;

    // Passing the description in the url
    if (description) {
      history.push(`/?q=${description}`);
    }
  }

  render() {
    const { description } = this.state;

    return (
      /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
      <Fragment>
        <Form onSubmit={this.onSubmit}>
          <Input
            type='text'
            placeholder='Search'
            name='description'
            value={description}
            onChange={this.onChange}
          />
          <Button type='submit'>Search</Button>
        </Form>
      </Fragment>
    );
  }
}

SearchForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default withRouter(SearchForm);
