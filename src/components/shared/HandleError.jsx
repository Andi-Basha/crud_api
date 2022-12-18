export const HandleError = ({ error, children }) => {
  if (error) {
    return (
      <div className='alert alert-danger' role='alert'>
        {error}
      </div>
    );
  }
  return <div>{children}</div>;
};
