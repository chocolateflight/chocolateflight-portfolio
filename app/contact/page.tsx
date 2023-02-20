/* eslint-disable react/no-unescaped-entities */

'use client';

import { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import Modal from '@/components/Modal';

export default function Contact() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
        .min(25, 'Must be at least 25 characters')
        .max(1000, 'Must be less than 1000 characters')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      setShowModal(true);
      resetForm();
    },
  });

  return (
    <main className='md:h-full w-full'>
      <Modal closeModal={closeModal} showModal={showModal} />
      <div className='h-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center gap-4 overflow-visible w-full md:flex-row md:max-w-[900px]'>
          <form
            className='flex flex-col text-white w-full'
            onSubmit={formik.handleSubmit}>
            <label htmlFor='name' className='font-bold'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              required
              onChange={formik.handleChange}
              value={formik.values.name}
              className='text-black rounded-lg'
            />
            {formik.errors.name ? (
              <div className='italic text-xs'>{formik.errors.name}</div>
            ) : null}
            <br />
            <label htmlFor='email' className='font-bold'>
              E-Mail
            </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              onChange={formik.handleChange}
              value={formik.values.email}
              className='text-black rounded-lg'
            />
            {formik.errors.email ? (
              <div className='italic text-xs'>{formik.errors.email}</div>
            ) : null}
            <br />
            <label htmlFor='message' className='font-bold'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              rows='5'
              minLength='25'
              maxLength='1000'
              required
              onChange={formik.handleChange}
              value={formik.values.message}
              className='text-black rounded-lg'></textarea>
            {formik.errors.message ? (
              <div className='italic text-xs'>{formik.errors.message}</div>
            ) : null}
            <br />
            <button className='border-2 rounded-lg p-2 hover:bg-white hover:text-black' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
