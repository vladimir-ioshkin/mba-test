import './Header.scss';

export function Header({ children }) {
    return (
        <h1 className='header'>{children}</h1>
    );
}
