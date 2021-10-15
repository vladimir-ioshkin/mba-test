import './CardsWrapper.scss';

export function CardsWrapper({ children }) {
    return (
        <div className='cards-wrapper'>
            {children}
        </div>
    );
}
