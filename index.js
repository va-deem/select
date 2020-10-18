import { Select } from './select/select';
import './select/style.scss';

const select = new Select('#select', {
  placeholder: 'Choose an option',
  data: [
    {id: "1", value: 'Option 1'},
    {id: "2", value: 'Option 2'},
    {id: "3", value: 'Option 3'},
    {id: "4", value: 'Option 4'},
    {id: "5", value: 'Option 5'},
    {id: "6", value: 'Option 6'},
    {id: "7", value: 'Option 7'},
  ],
  onSelect(item) {
    console.log('Selected item:', item);
  }
});

window.s = select;
