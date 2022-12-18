export const HandleLoading = ({ loading, children }) => {
  if (loading) {
    return (
      <div className='spinner-border text-primary' role='status'>
        <span className='sr-only'></span>
      </div>
    );
  }
  return <>{children}</>;
};
