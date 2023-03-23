import React from 'react';
import { ICard } from 'types/interface';

interface FormState {
  card: ICard;
}

export default class Form extends React.Component<object, FormState> {
  constructor({ card }: FormState) {
    super({ card });
  }

  render() {
    return (
      <form className="form">
        <div className="block">
          <span>Fist Name:</span>
          <input type="text" name="firstName" required />
        </div>

        <div className="block">
          <span>Last Name:</span>
          <input type="text" name="lastName" required />
        </div>

        <div className="block">
          <span>Birthday:</span>
          <input type="date" name="birthday" required />
        </div>

        <div className="block">
          <span>Country:</span>
          <select name="country">
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
            <option value="China">China</option>
          </select>
        </div>

        <div className="inline">
          <span>Male</span>
          <input type="radio" name="sex" id="male" value="male" />
          <span>Female</span>
          <input type="radio" name="sex" id="female" value="female" />
        </div>

        <div className="inline">
          <span>Photo</span>
          <input type="file" name="photo" accept="image/png, image/jpeg" />
        </div>

        <div className="inline">
          <span>I confirm my personal data:</span>
          <input type="checkbox" name="confirmData" />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
