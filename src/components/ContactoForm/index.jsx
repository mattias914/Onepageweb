import './ContactoForm.css'

const ContactoForm = () => {
  return (
  <>
    <section>
      <h1>Cuentanos, ¿en que podemos ayudarte?</h1>
      <form >
        <div className='correo'>
          <label htmlFor="">Correo</label>
          <input type="email" placeholder='Example@example.com' />
        </div>
        <div className='descripcion'>
          <label htmlFor="">Descripcion</label>
          <input type="text" />
        </div>
        <button>
          Enviar
        </button>
      </form>
    </section>
  </>
  );
};

export default ContactoForm;
