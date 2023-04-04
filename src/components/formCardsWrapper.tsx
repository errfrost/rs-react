import React, { useState } from 'react';
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

export default function FormCardsWrapper() {
  const [cards, setCards] = useState<ICard[]>([]);

  const newCard = (card: ICard) => {
    setCards([...cards, card]);
  };

  return (
    <div className="forms">
      <Form newCard={newCard} />
      <FormCards cards={cards} />
    </div>
  );
}
