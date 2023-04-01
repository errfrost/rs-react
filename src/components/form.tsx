import React, { FormEvent, useState } from 'react';
import { ICard } from 'types/interface';

interface NewCard {
  newCard: (card: ICard) => void;
}

export default function Form(newCard: NewCard) {
  const formRef: React.RefObject<HTMLFormElement> = React.createRef();
  const firstNameRef: React.RefObject<HTMLInputElement> = React.createRef();
  let firstNameError: React.RefObject<HTMLSpanElement> = React.createRef();
  const lastNameRef: React.RefObject<HTMLInputElement> = React.createRef();
  let lastNameError: React.RefObject<HTMLSpanElement> = React.createRef();
  const birthdayRef: React.RefObject<HTMLInputElement> = React.createRef();
  let birthdayError: React.RefObject<HTMLSpanElement> = React.createRef();
  const countryRef: React.RefObject<HTMLSelectElement> = React.createRef();
  const maleRef: React.RefObject<HTMLInputElement> = React.createRef();
  const femaleRef: React.RefObject<HTMLInputElement> = React.createRef();
  const photoRef: React.RefObject<HTMLInputElement> = React.createRef();
  let photoError: React.RefObject<HTMLSpanElement> = React.createRef();
  const confirmDataRef: React.RefObject<HTMLInputElement> = React.createRef();
  let confirmError: React.RefObject<HTMLSpanElement> = React.createRef();

  const [card, setCard] = useState<ICard>({
    firstName: '',
    lastName: '',
    birthday: '',
    country: '',
    gender: '',
    photo: '',
    confirmData: false,
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formValid()) {
      newCard.newCard(card);
      // eslint-disable-next-line no-alert
      alert('data has been saved');
      formRef.current?.reset();
    }
  }

  function handleChange(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCard({
      firstName: firstNameRef.current!.value,
      lastName: lastNameRef.current!.value,
      birthday: birthdayRef.current!.value,
      country: countryRef.current!.value,
      gender: maleRef.current!.checked
        ? maleRef.current!.value
        : femaleRef.current!.value,
      photo:
        photoRef.current!.files![0] && URL.createObjectURL(photoRef.current!.files![0]),
      confirmData: confirmDataRef.current!.checked,
    });
  }

  function formValid(): boolean {
    const letters = /^[A-Za-z]+$/;
    if (
      !firstNameRef.current?.value.match(letters) ||
      firstNameRef.current?.value.charAt(0) !==
      firstNameRef.current?.value.charAt(0).toUpperCase() ||
      firstNameRef.current?.value === ''
    ) {
      firstNameError.current!.style.display = 'block';
      return false;
    }
    firstNameError.current!.style.display = 'none';

    if (
      !lastNameRef.current?.value.match(letters) ||
      lastNameRef.current?.value.charAt(0) !==
      lastNameRef.current?.value.charAt(0).toUpperCase() ||
      lastNameRef.current?.value === ''
    ) {
      lastNameError.current!.style.display = 'block';
      return false;
    }
    lastNameError.current!.style.display = 'none';

    const todaysDate = new Date();
    const date = new Date(birthdayRef.current!.value);
    if (date.toString() === 'Invalid Date' || date >= todaysDate) {
      birthdayError.current!.style.display = 'block';
      return false;
    }
    birthdayError.current!.style.display = 'none';

    if (!photoRef.current!.files?.length) {
      photoError.current!.style.display = 'block';
      return false;
    }
    photoError.current!.style.display = 'none';

    if (!confirmDataRef.current!.checked) {
      confirmError.current!.style.display = 'block';
      return false;
    }
    confirmError.current!.style.display = 'none';

    return true;
  }

  return (
    <form
      ref={formRef}
      className="form"
      onSubmit={(e) => handleSubmit(e)}
      onChange={(e) => handleChange(e)}
    >
      <div className="block">
        <span>Fist Name:</span>
        <input ref={firstNameRef} type="text" name="firstName" />
        <span ref={firstNameError} className="error">
          First Name is required field and should start from capital letter(only letters allowed)
        </span>
      </div>

      <div className="block">
        <span>Last Name:</span>
        <input ref={lastNameRef} type="text" name="lastName" />
        <span ref={lastNameError} className="error">
          Last Name is required field and should start from capital letter(only letters allowed)
        </span>
      </div>

      <div className="block">
        <span>Birthday:</span>
        <input ref={birthdayRef} type="date" name="birthday" />
        <span ref={birthdayError} className="error">
          Date should be lower than today
        </span>
      </div>

      <div className="block">
        <span>Country:</span>
        <select ref={countryRef} name="country">
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
          ref={maleRef}
          type="radio"
          name="gender"
          id="male"
          value="male"
          defaultChecked
        />
        <span>Female:</span>
        <input ref={femaleRef} type="radio" name="gender" id="female" value="female" />
      </div>

      <div className="inline">
        <span>Photo:</span>
        <input ref={photoRef} type="file" name="photo" accept="image/png, image/jpeg" />
        <span ref={photoError} className="error">
          Select file
        </span>
      </div>

      <div className="inline">
        <span>I confirm my personal data:</span>
        <input ref={confirmDataRef} type="checkbox" name="confirmData" />
        <span ref={confirmError} className="error">
          Please confirm your personal information
        </span>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
