const Button = ({ label, eventHandler }) => {
  return (
    <button
      type='button'
      className='btn border border-r'
      onClick={eventHandler}
      data-action={label}
    >
      {label}
    </button>
  );
};

export default Button;
