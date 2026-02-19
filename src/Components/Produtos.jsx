import React from "react";
import { Link } from "react-router-dom";
import styles from "./Produtos.module.css";

import Head from "./Head";
const Produtos = () => {
  const [dados, setDados] = React.useState([]);
  const [carregando, setCarregando] = React.useState(null);

  React.useEffect(() => {
    setCarregando(true);
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => {
        setDados(json);
        setCarregando(false);
      });
  }, []);
  if (carregando) return <div className="loading"></div>;
  if (dados === null) return null;

  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Ranek" description="Descrição página home" />
      {dados.map((produto) => (
        <div key={produto.id} className={styles.produto}>
          <Link to={`produto/${produto.id}`}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          </Link>
          <span className={styles.nome}>{produto.nome}</span>
        </div>
      ))}
    </section>
  );
};

export default Produtos;
