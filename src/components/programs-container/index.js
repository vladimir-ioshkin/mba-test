import { useEffect, useState } from 'react';
import { API_URL } from '../../consts';
import { Program } from '../common/program';
import { getUnicPrograms } from './getUnicPrograms';
import './ProgramsContainer.scss';

export function ProgramsContainer() {
    const [programs, setPrograms] = useState([]);
    
    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then(({ data }) => setPrograms(getUnicPrograms(data)));
    }, []);

    if (programs.length === 0) {
        return null;
    }

    return (
        <div className='programs-container'>
            {programs.map(({ _id, title, specializedSubjects }) => {
                const length = specializedSubjects.length;
                const pivot = Math.ceil(length / 2);

                return (
                    <Program key={_id}>
                        <Program.Title>
                            {title}
                        </Program.Title>
                        <Program.Item>
                            <Program.Module
                                moduleNumber={1}
                                items={specializedSubjects.slice(0, pivot)}
                            />
                            <Program.Module
                                moduleNumber={2}
                                items={specializedSubjects.slice(pivot, length + 1)}
                            />
                        </Program.Item>
                    </Program>
                );
            })}
        </div>
    );
}
