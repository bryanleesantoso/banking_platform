import React from 'react'
import Image from 'next/image'
import { logoutAccount } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';

const Footer = ({user, type = 'desktop'}: FooterProps) => {
    const router = useRouter();
    const handleLogout = async () => { 
        const loggedOut = await logoutAccount();
        if (loggedOut) {
            router.push('/sign-in');
        }
}
  return (
    
    <footer className='footer'>
        <div className={type === 'mobile'?'footer_name_mobile':'footer_name'}>
            <p className='text-xl font-bold text-gray-700'>
                {user.firstName[0]}
            </p>
        </div>
        <div className={type === 'mobile'?'footer_email_mobile':'footer_email'}>
            <h1 className='text-14 truncate font-semibold text-gray-700'>
                {user.firstName}
            </h1>
            <p className='text-14 truncate font-normal text-gray-600'>
                {user.email}
            </p>
        </div>
        <div className='footer_image' onClick={handleLogout}>
            <Image src='icons/logout.svg' alt='logout' fill/>
        </div>
    </footer>
  )
}

export default Footer