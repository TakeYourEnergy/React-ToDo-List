import FormReact from '../form/form';

const Header = (props) => {
   return (
      <header>
         <FormReact addHandler={props.addHandler} />
      </header>
   )
}

export default Header