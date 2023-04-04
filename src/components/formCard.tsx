import { ICard } from 'types/interface';

export default function FormCard(card: ICard) {
  const { firstName, lastName, birthday, country, gender, confirmData, photo } = card;
  return (
    <div className="form-card">
      <div>
        {firstName} {lastName}
      </div>
      <div>{birthday}</div>
      <div>{country}</div>
      <div>{gender}</div>
      <div>Confirmed: {confirmData ? 'Yes' : 'No'}</div>
      <img src={photo} alt="" />
    </div>
  );
}
