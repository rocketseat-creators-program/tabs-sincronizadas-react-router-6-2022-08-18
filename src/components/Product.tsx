import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <h1>Lista dos Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="1">1</Link>
            </td>
            <td>Produto 1</td>
            <td>R$ 100,00</td>
          </tr>
          <tr>
            <td>
              <Link to="2">2</Link>
            </td>
            <td>Produto 2</td>
            <td>R$ 200,00</td>
          </tr>
          <tr>
            <td>
              <Link to="3">3</Link>
            </td>
            <td>Produto 3</td>
            <td>R$ 300,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
