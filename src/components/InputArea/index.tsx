import React from 'react';
import { categories } from '../../data/categories';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
  onAdd: (item: Item) => void;
}

const InputArea = ({onAdd}: Props) => {
  const [dateNew, setDateNew] = React.useState('');
  const [categoryNew, setCategoryNew] = React.useState('');
  const [titleNew, setTitleNew] = React.useState('');
  const [valueNew, setValueNew] = React.useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const clearFields = () => {
    setDateNew('');
    setCategoryNew('');
    setTitleNew('');
    setValueNew(0);
  }

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(dateNew).getTime())) {
      errors.push('Data inválida!');
    };

    if(!categoryKeys.includes(categoryNew)) {
      errors.push('Categoria inválida!');
    };

    if(titleNew === '') {
      errors.push('Título vazio!');
    };

    if(valueNew <= 0) {
      errors.push('Valor inválido!');
    };

    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      let newItem: Item  = {
        date: new Date(dateNew),
        category: categoryNew,
        title: titleNew,
        value: valueNew
      };
      onAdd(newItem);
      clearFields();
    }


  };

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input type="date" value={dateNew} onChange={e => setDateNew(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select value={categoryNew} onChange={e => setCategoryNew(e.target.value)}>
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>{categories[key].title}</option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input type="text" value={titleNew} onChange={e => setTitleNew(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input type="number" value={valueNew} onChange={e => setValueNew(parseFloat(e.target.value))} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.ButtonAdd onClick={handleAddEvent}>Adicionar</C.ButtonAdd>
      </C.InputLabel>
    </C.Container>
  )
};

export default InputArea;
