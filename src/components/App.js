import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Container } from "./Container/Container";
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    this.state.contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
      ? toast('This contact is already in your Phonebook!', { icon: '👻', })
      : this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getSearchContact = () => {
    const { filter, contacts } = this.state;
    const normalizedSearch = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedSearch));
  };

  render() {
    const { filter } = this.state;
    const searchContact = this.getSearchContact();

    return (
      <Layout>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter}/>
          <ContactList contacts={searchContact} onDeleteContact={this.deleteContact} />
          <GlobalStyle />
          <Toaster position="top-center" />
        </Container>
      </Layout>
    )
  }
}