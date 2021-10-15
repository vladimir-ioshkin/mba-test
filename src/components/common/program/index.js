import './Program.scss'; 
import { ProgramTitle } from './ProgramTitle';
import { ProgramItem } from './ProgramItem';
import { ProgramModule } from './ProgramModule';

export function Program({ children }) {
    return (
        <div className='program'>
            {children}
        </div>
    );
}

Program.Title = ProgramTitle;
Program.Title.displayName = 'Program.Title';

Program.Item = ProgramItem;
Program.Item.displayName = 'Program.Item';

Program.Module = ProgramModule;
Program.Module.displayName = 'Program.Module';

