import Image from "next/image";

const BodyHome = () => {
  return (
    <>
      {" "}
      <div className=" text-slate-200">
        <div className=" flex justify-center items-center w-66">
          <Image
            src="/imagen1.jpg"
            alt=""
            width="1000"
            height="100"
            className=" w-4/5 flex justify-center items-center rounded-xl"
          />
        </div>
        <hr className="relative top-10" />
        <div className=" xl:flex border-b-black mb-20 mt-20 mr-3 ml-3">
          <Image
            src="/imagen2.png"
            alt="salon"
            width="1000"
            height="100"
            className="rounded-xl"
          />

          <p className="italic p-2 xl:text-4xl xl:ml-14 xl:p-5 xl:text-justify bg-card-glass">
            Desde hace 8 años hemos tenido la oportunidad de realizar eventos de
            gran formato en las instalaciones del Centro Cultural Metropolitano
            de Convenciones de Armenia y el Quindío. Lugar del que, como
            quindianos nos sentimos orgullosos, porque nos permite posicionar al
            departamento como un destino de eventos, pues su infraestructura y
            cualidades técnicas están a la altura de los mejores recintos del
            país. De igual forma destacamos su ubicación estratégica, fácil
            acceso y amabilidad por parte de sus operadores y administradores.
          </p>
        </div>
        <div className=" xl:flex mr-3 ml-3 mb-4 block border-b-black">
          <div className="flex flex-col bg-card-glass mb-10 xl:mb-0 xl:text-4xl xl:p-10 xl:pt-20 xl:text-justify xl:mr-14 italic ">
            <p>
              Éste salón principal es ideal para realizar conciertos, ferias,
              shows de humor, conferencias, grados. Cuenta con un área de 1.228
              m² con capacidad para la siguiente cantidad de personas:
            </p>
            <ul className="ml-5 xl:mt-10 list-disc xl:m-10">
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
            className="rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default BodyHome;
