import { useCallback, useMemo, useState } from 'react';
import { List } from '../list';

export function ProgramModule({ moduleNumber, items }) {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = useCallback(() => setIsOpen((prev) => !prev), []);

    const className = useMemo(() => {
        if (isOpen) {
            return 'program__module program__module_open';
        }

        return 'program__module program__module_close';
    }, [isOpen]) ;

    if (items.length === 0) {
        return null;
    }
    
    return (
        <div className={className}>
            <div
                className='program__subtitle'
                onClick={onClick}
            >
                {`${moduleNumber}\u00A0модуль`}
            </div>
            <div className='program__list'>
                <List>
                    {items.map((item) => {
                        return (
                            <List.Item key={item}>{item}</List.Item>
                        );
                    })}
                </List>
            </div>
        </div>
    );
}
