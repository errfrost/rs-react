import React, { FormEvent } from 'react';
import { ICard } from 'types/interface';

interface NewCard {
  newCard: (card: ICard) => void;
}

export default class Form extends React.Component<NewCard, ICard> {
  private formRef: React.RefObject<HTMLFormElement>;

  private firstNameRef: React.RefObject<HTMLInputElement>;

  private firstNameError: React.RefObject<HTMLSpanElement>;

  private lastNameRef: React.RefObject<HTMLInputElement>;

  private lastNameError: React.RefObject<HTMLSpanElement>;

  private birthdayRef: React.RefObject<HTMLInputElement>;

  private birthdayError: React.RefObject<HTMLSpanElement>;

  private countryRef: React.RefObject<HTMLSelectElement>;

  private maleRef: React.RefObject<HTMLInputElement>;

  private femaleRef: React.RefObject<HTMLInputElement>;

  private photoRef: React.RefObject<HTMLInputElement>;

  private photoError: React.RefObject<HTMLSpanElement>;

  private confirmDataRef: React.RefObject<HTMLInputElement>;

  private confirmError: React.RefObject<HTMLSpanElement>;

  constructor(props: NewCard) {
    super(props);

    this.formRef = React.createRef();
    this.firstNameRef = React.createRef();
    this.firstNameError = React.createRef();
    this.lastNameRef = React.createRef();
    this.lastNameError = React.createRef();
    this.birthdayRef = React.createRef();
    this.birthdayError = React.createRef();
    this.countryRef = React.createRef();
    this.maleRef = React.createRef();
    this.femaleRef = React.createRef();
    this.photoRef = React.createRef();
    this.photoError = React.createRef();
    this.confirmDataRef = React.createRef();
    this.confirmError = React.createRef();

    this.state = {
      firstName: '',
      lastName: '',
      birthday: '',
      country: '',
      gender: '',
      photo: '',
      confirmData: false,
    };
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { newCard } = this.props;
    if (this.formValid()) {
      newCard(this.state);
      // eslint-disable-next-line no-alert
      alert('data has been saved');
      this.formRef.current?.reset();
    }
  }

  handleChange(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      firstName: this.firstNameRef.current!.value,
      lastName: this.lastNameRef.current!.value,
      birthday: this.birthdayRef.current!.value,
      country: this.countryRef.current!.value,
      gender: this.maleRef.current!.checked
        ? this.maleRef.current!.value
        : this.femaleRef.current!.value,
      photo:
        this.photoRef.current!.files![0] && URL.createObjectURL(this.photoRef.current!.files![0]),
      confirmData: this.confirmDataRef.current!.checked,
    });
  }

  formValid(): boolean {
    const firstNameError = this.firstNameError.current;
    if (
      this.firstNameRef.current?.value.charAt(0) !==
        this.firstNameRef.current?.value.charAt(0).toUpperCase() ||
      this.firstNameRef.current?.value === ''
    ) {
      firstNameError!.style.display = 'block';
      return false;
    }
    firstNameError!.style.display = 'none';

    const lastNameError = this.lastNameError.current;
    if (
      this.lastNameRef.current?.value.charAt(0) !==
        this.lastNameRef.current?.value.charAt(0).toUpperCase() ||
      this.lastNameRef.current?.value === ''
    ) {
      lastNameError!.style.display = 'block';
      return false;
    }
    lastNameError!.style.display = 'none';

    const birthdayError = this.birthdayError.current;
    const todaysDate = new Date();
    const date = new Date(this.birthdayRef.current!.value);
    if (date.toString() === 'Invalid Date' || date >= todaysDate) {
      birthdayError!.style.display = 'block';
      return false;
    }
    birthdayError!.style.display = 'none';

    const photoError = this.photoError.current;
    if (!this.photoRef.current!.files?.length) {
      photoError!.style.display = 'block';
      return false;
    }
    photoError!.style.display = 'none';

    const confirmError = this.confirmError.current;
    if (!this.confirmDataRef.current!.checked) {
      confirmError!.style.display = 'block';
      return false;
    }
    confirmError!.style.display = 'none';

    return true;
  }

  render() {
    return (
      <form
        ref={this.formRef}
        className="form"
        onSubmit={(e) => this.handleSubmit(e)}
        onChange={(e) => this.handleChange(e)}
      >
        <div className="block">
          <span>Fist Name:</span>
          <input ref={this.firstNameRef} type="text" name="firstName" />
          <span ref={this.firstNameError} className="error">
            First Name is required field and should start from capital letter
          </span>
        </div>

        <div className="block">
          <span>Last Name:</span>
          <input ref={this.lastNameRef} type="text" name="lastName" />
          <span ref={this.lastNameError} className="error">
            Last Name is required field and should start from capital letter
          </span>
        </div>

        <div className="block">
          <span>Birthday:</span>
          <input ref={this.birthdayRef} type="date" name="birthday" />
          <span ref={this.birthdayError} className="error">
            Date should be lower than today
          </span>
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
          <span>Male:</span>
          <input
            ref={this.maleRef}
            type="radio"
            name="gender"
            id="male"
            value="male"
            defaultChecked
          />
          <span>Female:</span>
          <input ref={this.femaleRef} type="radio" name="gender" id="female" value="female" />
        </div>

        <div className="inline">
          <span>Photo:</span>
          <input ref={this.photoRef} type="file" name="photo" accept="image/png, image/jpeg" />
          <span ref={this.photoError} className="error">
            Select file
          </span>
        </div>

        <div className="inline">
          <span>I confirm my personal data:</span>
          <input ref={this.confirmDataRef} type="checkbox" name="confirmData" />
          <span ref={this.confirmError} className="error">
            Please confirm your personal information
          </span>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
