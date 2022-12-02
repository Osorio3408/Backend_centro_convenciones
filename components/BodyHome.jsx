import Image from "next/image";

const BodyHome = () => {
  return (
    <>
      {" "}
      <div className="bg-sky-800 text-slate-200">
        <div className=" block flex justify-center items-center w-66">
          <img src="/imagen1.jpg" alt="" className=" w-4/5 flex justify-center items-center" />
        </div>
        <hr />
        <div className=" xl:flex border-b-black mb-20 mt-20 mr-3 ml-3">
          <Image src="/imagen2.png" alt="salon" width="1000" height="100" />

          <p className="italic p-2 xl:text-3xl ">
            Desde hace 8 años hemos tenido la oportunidad de realizar eventos de
            gran formato en las instalaciones del Centro Cultural Metropolitano
            de Convenciones de Armenia y el Quindío. Lugar del que, como
            quindianos nos sentimos orgullosos, porque nos permite posicionar al
            departamento como un destino de eventos, pues su infraestructura y
            cualidades técnicas están a la altura de los mejores recintos del
            país. De igual forma destacamos su ubicación estratégica, fácil
            acceso y amabilidad por parte de sus operadores y administradores
          </p>
        </div>
        <div className=" xl:flex mr-3 ml-3 mb-4 block border-b-black">
          <div className=" flex flex-col">
          <p className=" italic p-2 xl:text-3xl">
            Éste salón principal es ideal para realizar conciertos, ferias,
            shows de humor, conferencias, grados.
            Cuenta con un área de 1.228 m² con capacidad para la siguiente cantidad de personas:
          </p>
          <ul className=" italic p-2 xl:text-3xl">
            <li>Auditorio: 1.400 personas aproximadamente.</li>
            <li>Aula: 710 personas aproximadamente.</li>
            <li>Banquete: 940 personas aproximadamente.</li>
            <li>Cóctel: 1.880 personas aproximadamente.</li>
          </ul>
          </div>

          <Image
            src="/salon-barranquero.jpg"
            alt="salon-barranquero"
            width="1000"
            height="100"
          />
        </div>
      </div>
    </>
  );
};

export default BodyHome;
