/* eslint-disable react/no-unescaped-entities */
'use client';

type Props = {
  closeModal: () => void;
  showModal: boolean;
};

export default function Modal(props: Props) {
  const closeModal = () => {
    props.closeModal();
  };

  return (
    <div
      className={`${
        props.showModal ? '' : 'hidden'
      } absolute top-0 left-0 w-full h-full backdrop-brightness-50 backdrop-blur-sm flex justify-center items-center`}>
      <div className='select-none bg-white h-[200px] w-full flex flex-col justify-center items-center'>
        <p className='p-2 text-center'>
          This form has no function. It is used to perform form validation. You can
          contact me via LinkedIn.
        </p>
        <span
          className='border-2 p-3 rounded-lg bg-black text-white'
          onClick={closeModal}>
          CLOSE MODAL
        </span>
      </div>
    </div>
  );
}
