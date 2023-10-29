const NotFound = () => {
  const estiloH1 = {
    fontSize: "24px",
    color: "red",
    textAlign: "center",
  };

  const estiloDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 70px)",
  };

  return (
    <>
      <div style={estiloDiv}>
        <h1 style={estiloH1}>Lo siento, la página que buscas no existe</h1>
      </div>
    </>
  );
};

export default NotFound;
