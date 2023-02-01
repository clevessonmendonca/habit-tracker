import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon, DragHandleDots2Icon, MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { TasksList } from '../../Tasks';
import { Modal } from '../../../components/Modal';
import { useState } from 'react';
import { Projets } from '../../../components/Projets';

export const Main = () => {
    const [openModal, setOpenModal] = useState(false)

  return (
    <div className='container mx-auto p-5'>
        <p className='text-xl'>You have got <span className="font-bold">4 task</span> today to complete.</p>
        <div className='flex justify-center items-end gap-2'>
            <input type="text" className='w-full rounded-lg bg-zinc-800 mt-4 h-8 px-4'  placeholder='Search Task' />
            <button type="submit" className='relative flex items-center justify-center w-10 h-8 rounded-lg bg-zinc-800 mt-4'>
                <MagnifyingGlassIcon width={18} height={18} />
            </button>
        </div>
        <div>
            <div className='flex justify-between my-3'>
                <h2>Projects</h2>
                <Link 
                    to='/tasks'
                    className='text-violet-500'
                >See All</Link>
            </div>
            <Projets />
        </div>
        <div>
            <div className='flex justify-between my-3'>
                <h2>Today's Taks</h2>
                <Link 
                    to='/tasks'
                    className='text-violet-500' 
                >See All</Link>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='bg-zinc-800 rounded-lg flex justify-between items-center p-4'>
                    <div className='flex items-center gap-2'>
                        <DragHandleDots2Icon className='cursor-pointer' width={18} height={18} />
                        <label className="flex flex-col cursor-pointer" htmlFor="task">
                            <h1>Drink Water</h1>
                            <p className='text-zinc-400 text-sm'>Drink Water</p>
                        </label>
                    </div>
                    <Checkbox.Root id='task' className='flex justify-center items-center border-violet-500 border-2 rounded-full w-10 h-10 aria-checked:bg-violet-500 transition-colors'>
                        <Checkbox.Indicator className='group-aria-checked:bg-violet-500'>
                            <CheckIcon width={28} height={28} />
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                </div>
            </div>
        </div>

        <div className='fixed right-5 bottom-5'>
            <Modal />
        </div>
    </div>
  )
}
