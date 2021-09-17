import './Loading.css';

export default function Loading() {
  return (
    <div className='loading-container'>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
