import Modal from "react-modal";

export const MyModal = ({ modalIsOpen, setModalIsOpen }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(18, 18, 20, 0.5)",
    },

    content: {
      top: "50%",
      left: "50%",
      right: "800px",
      bottom: "190px",
      maxWidth: "430px",
      maxHeight: "300px",
      width: "100%",
      height: "100%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "var(--Grey-3)",
      border: "none",
      padding: "0px ",
    },
  };

  function closeModal() {
    console.log("close");

    setModalIsOpen(false);
  }
  function afterOpenModal() {}

  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <div className="modal__header">
        <div>
          <h1>Cadastrar Tecnologia</h1>
          <button onClick={() => closeModal()}>X</button>
        </div>
      </div>

      <form>
        <div className="campo1">
          <label>Nome</label>
          <input />
        </div>

        <div className="campo2">
          <label>Status</label>
          <select>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>

        <div className="campoBtn">
          <button className="btn__save">Salvar alterações</button>
          <button className="btn__delete" sizeButton="3rem">
            Excluir
          </button>
        </div>
      </form>
    </Modal>
  );
};
