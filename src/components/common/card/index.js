import { PRIMARY_STYLE } from './consts';
import './Card.scss';

export function Card({ title, children, style }) {
    const className = style === PRIMARY_STYLE ?
        'card card_primary' :
        'card';

    return (
        <div className={className}>
            <h2 className='card__title'>{title}</h2>
            {children}
        </div>
    );
}
