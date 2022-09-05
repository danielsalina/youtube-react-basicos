export default function Info  ({ peso, altura, imc, diaDePesaje, horaDePesaje })  {

  return (
    <div className="col m6 s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">IMC</span>
          <div className="card-data center m6 s6">
            <p>IMC: {imc}</p>
            <p>Peso: {peso}</p>
            <p>Altura: {altura}</p>
            <p>Día y hora: {diaDePesaje} {horaDePesaje}</p>
          </div>
          </div>
        </div>
    </div>
  );
};
