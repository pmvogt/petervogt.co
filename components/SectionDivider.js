const SectionDivider = ({ children }) => {
  return (
    <>
      <div className='py-4 border-t border-b border-slate-700/50 dark:border-slate-100/50 px-7'>
        {children}
      </div>
    </>
  );
};

export default SectionDivider;
