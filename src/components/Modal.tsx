import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, PlusIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export const Modal = () => {
    let [isModalOpen, setIsModelOpen] = useState(false)

    function buttonClicked() {
      isModalOpen = true
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger 
                type="button"
                onClick={buttonClicked}
                className='md:rounded-lg rounded-full p-4 bg-violet-600 flex justify-center items-center gap-2 cursor-pointer borde font-semibold hover:bg-violet-500 transition-colors focus:outiline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background'
            >
                <PlusIcon width={20} height={20} />
                <span className='md:block hidden'>Add Task</span>
            </Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
                <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200'>
                            <Cross2Icon />
                        </Dialog.Close>
                        
                        <Dialog.Title className="text-3xl leading-tight font-extrabold">
                            Criar hábito
                        </Dialog.Title>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
  )
}
