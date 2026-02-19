import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Produto.module.css";
import Head from "./Head";
const Produto = () => {
  const params = useParams();
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);
  const [erro, setErro] = React.useState("");
  const { id } = useParams();

  React.useEffect(() => {
    async function getDados(url) {
      try {
        setCarregando(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (e) {
        setErro("Um erro aconteceu");
      } finally {
        setCarregando(false);
      }
    }
    getDados(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (carregando) return <div className="loading"></div>;
  if (erro) return <p>{erro}</p>;
  if (produto === null) return;
  return (
    <section className={`${styles.produtoPage} animeLeft`}>
      <Head
        title={`Ranek | ${produto.nome}`}
        description="Descrição página produto"
      />
      {!carregando && produto && (
        <>
          <div className={styles.produtoCollumn}>
            {produto.fotos.map((foto) => (
              <img key={foto.titulo} src={foto.src} alt={foto.titulo} />
            ))}
          </div>
          <div className={styles.produtoCollumn}>
            <h3>{produto.nome}</h3>
            <span>R$ {produto.preco}</span>
            <p>{produto.descricao}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Produto;
