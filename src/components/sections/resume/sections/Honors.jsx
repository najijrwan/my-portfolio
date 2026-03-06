const Honors = ({ honor }) => (
  <>
    <header className="mb-2 flex items-center gap-2 text-white">
      <h1 className='capitalize'>{honor.title}</h1>
      <button
        onClick={() => window.open(honor.src, '_blank')}
        className='flex items-start'>
        <ion-icon
          name='reader-outline'
          className='size-4.5 text-yellow-crayola hover:text-yellow-crayola/50'
        />
      </button>
    </header>

    <div className='ml-2.5'>
      <p className='text-light-gray'><span className="text-vegas-gold"> - </span>{honor.description}</p>
      <p className='capitalize italic'><span className="text-vegas-gold"> - </span>{honor.issuer}</p>
      <p><span className="text-vegas-gold"> - </span>{honor.date}</p>
    </div>
  </>
);

export default Honors;