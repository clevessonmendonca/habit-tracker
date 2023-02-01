import { DotsVerticalIcon } from '@radix-ui/react-icons'
import * as Progress from '@radix-ui/react-progress';

export const Projets = () => {
  return (
    <div className='flex gap-2 max-w-full'>
        <div className="bg-zinc-800 rounded-lg w-[250px] p-4 flex flex-col gap-2" >
            <div className='flex justify-between items-center'>
                <p className='px-2 py-1 rounded-lg shadow-md shadow-black bg-yellow-600 font-normal text-xs'>2 days left</p>
                <DotsVerticalIcon className='cursor-pointer' />
            </div>
            <div>
                <h1 className='text-lg'>UX React</h1>
                <p className='font-normal text-zinc-400 text-xs'>Create a app in React</p>
            </div>
            <div>
                <p className='flex justify-between text-zinc-200 text-sm mb-2'>
                    Progress 
                    <span>22%</span>
                </p>
                <Progress.Root className='w-full h-2 bg-zinc-900 rounded-full'>
                    <Progress.Indicator className='w-1/2 h-full bg-violet-700 rounded-full' />
                </Progress.Root>
            </div>
        </div>
    </div>
  )
}
