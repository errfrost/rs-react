import React from 'react';
import { ICard } from 'types/interface';

interface FormState {
  card: ICard;
}

export default class Form extends React.Component<object, FormState> {
  private firstNameRef: React.RefObject<HTMLInputElement>;

  private lastNameRef: React.RefObject<HTMLInputElement>;

  private birthdayRef: React.RefObject<HTMLInputElement>;

  private countryRef: React.RefObject<HTMLSelectElement>;

  private maleRef: React.RefObject<HTMLInputElement>;

  private femaleRef: React.RefObject<HTMLInputElement>;

  private photoRef: React.RefObject<HTMLInputElement>;

  private confirmDataRef: React.RefObject<HTMLInputElement>;

  constructor(card: FormState) {
    super(card);
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.birthdayRef = React.createRef();
    this.countryRef = React.createRef();
    this.maleRef = React.createRef();
    this.femaleRef = React.createRef();
    this.photoRef = React.createRef();
    this.confirmDataRef = React.createRef();
  }

  render() {
    return (
      <form className="form">
        <div className="block">
          <span>Fist Name:</span>
          <input ref={this.firstNameRef} type="text" name="firstName" required />
        </div>

        <div className="block">
          <span>Last Name:</span>
          <input ref={this.lastNameRef} type="text" name="lastName" required />
        </div>

        <div className="block">
          <span>Birthday:</span>
          <input ref={this.birthdayRef} type="date" name="birthday" required />
        </div>

        <div className="block">
          <span>Country:</span>
          <select ref={this.countryRef} name="country">
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
          <input ref={this.maleRef} type="radio" name="gender" id="male" value="male" />
          <span>Female</span>
          <input ref={this.femaleRef} type="radio" name="gender" id="female" value="female" />
        </div>

        <div className="inline">
          <span>Photo</span>
          <input ref={this.photoRef} type="file" name="photo" accept="image/png, image/jpeg" />
        </div>

        <div className="inline">
          <span>I confirm my personal data:</span>
          <input ref={this.confirmDataRef} type="checkbox" name="confirmData" />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
