import React from 'react';
import { categories } from '../../data/categories';
import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as C from './styles';


type Props = {
  item: Item;
}

const TableItem = ({item}: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? 'red' : 'green'} >
        R$ {item.value.toFixed(2)}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  )
};

export default TableItem;
