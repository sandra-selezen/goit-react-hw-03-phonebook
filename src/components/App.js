import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Container } from "./Container/Container";

export class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };

  addContact = newContact => {

    this.state.contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
      ? alert("This contact is already in your Phonebook!")
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
        </Container>
      </Layout>
    )
  }
}