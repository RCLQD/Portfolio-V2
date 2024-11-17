import { Icon } from '@iconify/react';

const Footer = ({ theme }) => {
    return(
        <footer className={`${theme === 'dark' ? 'border-t-white' : 'border-t-black'} border-t border-opacity-20 font-montserrat flex justify-between items-center p-4 mt-12`}>
        <aside className="flex gap-x-1 items-center">
            {theme === 'light' ? (
                <img src="/logos/Logo1.png" alt="Logo" className="size-12" />
            ) : (
                <img src="/logos/Logo2.png" alt="Logo" className="size-12" />
            )}
            <p>Reysil M. Clarion</p>
        </aside>
        <nav className="flex items-center gap-x-2">
            <a href="https://www.linkedin.com/in/reysilclarion/" target="_blank">
                <Icon icon="circum:linkedin" className="size-10" />
            </a>
            <a href="https://github.com/RCLQD" target="_blank">
                <Icon icon="akar-icons:github-outline-fill" className="size-9" />
            </a>
            <a href="https://www.facebook.com/reysil.clarion.1" target="_blank">
                <Icon icon="qlementine-icons:facebook-16" className="size-9" />
            </a>
        </nav>
        </footer>
    )
}

export default Footer;