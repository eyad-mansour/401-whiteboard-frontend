import Button from './Button';
const Header = ({ title }) => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} color="green" text="add" />
    </header>
  );
};
export default Header;
