import React from 'react';
import Form from './form';
import { ICard } from '../types/interface';
import FormCard from './formCard';

interface Props {
  cards: ICard[];
}

export function FormCards({ cards }: Props) {
  return (
    <div className="form-cards">
      {cards.map((card, i) => {
        const { firstName, lastName, birthday, country, gender, photo, confirmData } = card;
        return (
          <FormCard
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            firstName={firstName}
            lastName={lastName}
            birthday={birthday}
            country={country}
            gender={gender}
            photo={photo}
            confirmData={confirmData}
          />
        );
      })}
    </div>
  );
}

export default class FormCardsWrapper extends React.Component<object, Props> {
  constructor(props = {}) {
    super(props);
    this.state = { cards: [] };
  }

  newCard = (card: ICard) => {
    const { cards } = this.state;
    this.setState({ cards: [...cards, card] });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="forms">
        <Form newCard={this.newCard} />
        <FormCards cards={cards} />
      </div>
    );
  }
}
