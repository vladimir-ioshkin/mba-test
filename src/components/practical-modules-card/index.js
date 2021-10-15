import { Card } from '../common/card';
import { PRIMARY_STYLE } from '../common/card/consts';

export function PracticalModulesCard() {
    return (
        <Card title='Практические модули' style={PRIMARY_STYLE}>
            <div>
                Работа над собственными проектами: 
                практика групповых взаимодействий, 
                кейс-методы, эссе
            </div>
        </Card>
    );
}
