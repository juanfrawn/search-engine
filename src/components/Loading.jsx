import { InfinitySpin  } from 'react-loader-spinner'

export const Loading = () => {
  return (
    <div className='flex justify-center items-center h-80'>
        <InfinitySpin  color="#00BFFF" width={200} />
    </div>
  )
}
