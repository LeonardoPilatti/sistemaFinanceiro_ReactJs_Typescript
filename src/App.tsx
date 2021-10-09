import React from 'react'
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import TableArea from './components/TableArea';

const App = () => {
  const [list, setList] = React.useState(items);  /// complete list;
  const [filteredList, setFilteredList] = React.useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth());    /// aqui está armazenado o mês atual no currentMonth;

  React.useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* area de inserção */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  )
}

export default App
