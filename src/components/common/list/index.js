import { ListItem } from './ListItem';
import './List.scss';

export function List({ children }) {
    return (
        <ul className='list'>
            {children}
        </ul>
    );
}

List.Item = ListItem;
List.Item.displayName = 'List.Item';
