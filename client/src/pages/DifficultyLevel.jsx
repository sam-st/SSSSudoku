import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function SplitBasicExample() {
  function onDifficultyChange(e) {
    console.log(e.target.value);
  }

  return (
    <Dropdown as={ButtonGroup} onChange={(e) => onDifficultyChange(e)}>
      <Button onChange={(e) => onDifficultyChange(e)} variant="success">Choose Your Level</Button>

      <Dropdown.Toggle onChange={(e) => onDifficultyChange(e)} split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu  onChange={(e) => onDifficultyChange(e)}>
        <Dropdown.Item  value='easy' href="/game"
        >Easy</Dropdown.Item>
        <Dropdown.Item value='medium' href="/game">Medium</Dropdown.Item>
        <Dropdown.Item value='hard' href="/game">Hard</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SplitBasicExample;