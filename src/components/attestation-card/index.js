import { Card } from '../common/card';
import { List } from '../common/list';

export function AttestationCard() {
    return (
        <Card title='Итоговая аттестация'>
            <List>
                <List.Item>
                    Бизнес-проектирование (подготовка итоговой 
                    аттестационной работы, консультирование 
                    по&nbsp;бизнес-проектированию)
                </List.Item>
                <List.Item>
                    Защита итоговой аттестационной работы
                </List.Item>
            </List>
        </Card>
    )
}