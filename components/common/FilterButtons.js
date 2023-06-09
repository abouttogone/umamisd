import { ButtonGroup, Button, Flexbox } from 'react-basics';

export default function FilterButtons({ items, selectedKey, onSelect }) {
  return (
    <Flexbox justifyContent="center">
      <ButtonGroup items={items} selectedKey={selectedKey} onSelect={onSelect}>
        {({ key, label }) => <Button key={key}>{label}</Button>}
      </ButtonGroup>
    </Flexbox>
  );
}
