import Loading from './assets/loading-gif.gif'

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img width={180} className='text-center mx-auto' src={Loading} alt="Loading..." />
    </div>
  )
}
export default Spinner