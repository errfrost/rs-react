import React, { FormEvent, useState } from 'react';
import { ICard } from 'types/interface';
import { useForm } from "react-hook-form";

interface NewCard {
  newCard: (card: ICard) => void;
}

export default function Form(newCard: NewCard) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ICard>();

  const onSubmit = (card: ICard) => {
    const formData = {
      ...card,
      photo: URL.createObjectURL(new Blob ([card.photo[0]])),
      
    };
    newCard.newCard(formData);
    alert('Card created successfully')
    reset();
  };

  const todaysDate = new Date();

  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="block">
        <span>Fist Name:</span>
        <input
          {...register('firstName', {
            required: 'First Name is required',
            pattern: {
              value: /^[A-Z]/,
              message: 'First Name should start from capital letter',
            },
          })}
        />
        {errors.firstName && <span className="error">
          {errors.firstName.message}
        </span>}
      </div>

      <div className="block">
        <span>Last Name:</span>
        <input
          {...register('lastName', {
            required: 'Last Name is required',
            pattern: {
              value: /^[A-Z]/,
              message: 'Last Name should start from capital letter',
            },
          })}
        />
        {errors.lastName && <span className="error">
          {errors.lastName.message}
        </span>}
      </div>

      <div className="block">
        <span>Birthday:</span>
        <input
          type="date"
          {...register('birthday', {
            required: 'Birthday is required',
            max: {
              value: `${todaysDate}`,
              message: 'Date should be lower than today or equal',
            },
          })}
        />
        {errors.birthday && <span className="error">
          {errors.birthday.message}
        </span>}
      </div>

      <div className="block">
        <span>Country:</span>
        <select {...register('country', {
          required: 'Country is required',
        })}>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Russia">Russia</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
        </select>
        {errors.country && <span className="error">
          {errors.country.message}
        </span>}
      </div>

      <div className="inline">
        <span>Male:</span>
        <input type="radio" id="male" {...register('gender', { required: 'You must select gender' })} value="male" />
        <span>Female:</span>
        <input type="radio" id="female" {...register('gender', { required: 'You must select gender' })} value="female" />
        {errors.gender && <span className="error">
          {errors.gender.message}
        </span>}
      </div>

      <div className="inline">
        <span>Photo:</span>
        <input type="file" accept="image/png, image/jpeg"
          {...register('photo', {
            required: 'Select file',
          })} />
        {errors.photo && <span className="error">
          {errors.photo.message}
        </span>}
      </div>

      <div className="inline">
        <span>I confirm my personal data:</span>
        <input type="checkbox" {...register('confirmData', { required: 'Please confirm your personal information' })} />
        {errors.confirmData && <span className="error">
          {errors.confirmData.message}
        </span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
