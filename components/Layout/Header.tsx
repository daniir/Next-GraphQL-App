import Link from 'next/link';

export default function Header(){
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <Link href='/'>
                    <a className='navbar-brand text-white'>Projects</a>
                </Link>
            </div>
        </nav>
    );
};