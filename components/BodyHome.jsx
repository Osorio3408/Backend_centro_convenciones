const BodyHome = () => {
  return (
    <div className="bg-sky-800 text-slate-200"> 
      <div className=" block">
        <img src="/imagen1.jpg" alt="" />
      </div>
      <hr />
      <div className=" block border-b-black mb-20 mt-20">
        <img src="/imagen2.png" alt="" />

        <p className="italic p-2">
          Desde hace 8 años hemos tenido la oportunidad de realizar eventos de
          gran formato en las instalaciones del Centro Cultural Metropolitano de
          Convenciones de Armenia y el Quindío. Lugar del que, como quindianos
          nos sentimos orgullosos, porque nos permite posicionar al departamento
          como un destino de eventos, pues su infraestructura y cualidades
          técnicas están a la altura de los mejores recintos del país. De igual
          forma destacamos su ubicación estratégica, fácil acceso y amabilidad
          por parte de sus operadores y administradores
        </p>
      </div>
      <div className=" block border-b-black">
        <p className=" italic p-2">
          Éste salón principal es ideal para realizar conciertos, ferias, shows
          de humor, conferencias, grados.
        </p>
        <img src="/salon-barranquero.jpg" alt="" />
      </div>
    </div>
  );
};

export default BodyHome;
