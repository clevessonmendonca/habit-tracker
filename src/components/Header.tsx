import * as Avatar from '@radix-ui/react-avatar';
import * as Popover from '@radix-ui/react-popover';
import { Navbar } from './Navbar';

import Logo from '../assets/logo.png'

export const Header = () => {
  return (
    <div className='container px-4 flex items-center justify-between mx-auto my-4'>
        <img className='w-14 rounded-full' src={Logo} alt="Habit Day Logo" />
        <div>
            <Popover.Root>
                <Popover.Trigger>
                    <Avatar.Root>
                        <Avatar.Image
                            className="rounded-full w-10 h-10 cursor-pointer"
                            src="https://avatars.githubusercontent.com/u/75531298?v=4"
                            alt="Foto de Clevesson"
                        />
                        <Avatar.Fallback delayMs={600}>
                            CL
                        </Avatar.Fallback>
                    </Avatar.Root>
                </Popover.Trigger>
                <Popover.Anchor />
                <Popover.Portal>
                <Popover.Content className='bg-zinc-800 mr-4 p-4 rounded-lg ransition-colors'>
                    <Navbar />
                    <Popover.Arrow className="fill-zinc-800" />
                </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    </div>
  )
}
