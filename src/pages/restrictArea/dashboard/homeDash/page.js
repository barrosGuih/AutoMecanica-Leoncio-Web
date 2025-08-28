import { useState } from "react";
import style from "./page.module.css";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const [contas, setContas] = useState([
    { id: 1, descricao: "Fornecedor de Peças ABC", valor: 2500.0, vencimento: "2024-01-15", status: "pendente", categoria: "Peças" },
    { id: 2, descricao: "Combustível - Janeiro", valor: 1200.0, vencimento: "2024-01-10", status: "pago", categoria: "Combustível" },
    { id: 3, descricao: "Manutenção Equipamentos", valor: 800.0, vencimento: "2024-01-20", status: "pendente", categoria: "Manutenção" },
  ]);

  const [itensAdquiridos, setItensAdquiridos] = useState([
    { id: 1, item: "Pneu 175/70 R13", quantidade: 10, Fornecedor: "SpeedMax", precoUnitario: 280, precoGeral: 2800},
  ]);

  const [itensDistribuidos, setItensDistribuidos] = useState([
    { id: 1, item: "Óleo Motor 15W40", quantidade: 50, departamento: "Secretaria de Obras", data: "2024-01-08", responsavel: "João Silva" },
    { id: 2, item: "Filtro de Ar", quantidade: 25, departamento: "Secretaria de Transporte", data: "2024-01-07", responsavel: "Maria Santos" },
    { id: 3, item: "Pastilha de Freio", quantidade: 30, departamento: "Secretaria de Obras", data: "2024-01-06", responsavel: "Carlos Lima" },
  ]);

  const [novaConta, setNovaConta] = useState({ descricao: "", valor: "", vencimento: "", categoria: "Peças" });
  const [novoItem, setNovoItem] = useState({ item: "", quantidade: "", departamento: "", responsavel: "", placa: ""});
  const [novoItemAdquirido, setNovoItemAdquirido] = useState([{ item: "Pneu 175/70 R13", quantidade: 10, Fornecedor: "SpeedMax", precoUnitario: 280, precoGeral: 2800},]);

  const adicionarConta = () => {
    if (novaConta.descricao && novaConta.valor && novaConta.vencimento) {
      const conta = { id: Date.now(), ...novaConta, valor: parseFloat(novaConta.valor), status: "pendente" };
      setContas([...contas, conta]);
      setNovaConta({ descricao: "", valor: "", vencimento: "", categoria: "Peças" });
    }
  };

  const adicionarItemAdquirido = () =>{
    if(novoItemAdquirido.item && novoItemAdquirido.quantidade && novoItemAdquirido.Fornecedor && novoItemAdquirido.precoUnitario && novoItemAdquirido.precoGeral) {
      const item = {id: Date.now(), ...novoItemAdquirido, quantidade: parseInt(novoItemAdquirido.quantidade)};
      setItensAdquiridos([...itensAdquiridos, item]);
      setNovoItemAdquirido({ item: "", quantidade: "", Fornecedor: "", precoUnitario: "", precoGeral: ""});
    }
  }

  const adicionarItem = () => {
    if (novoItem.item && novoItem.quantidade && novoItem.departamento && novoItem.responsavel && novoItem.placa) {
      const item = { id: Date.now(), ...novoItem, quantidade: parseInt(novoItem.quantidade), data: new Date().toISOString().split("T")[0] };
      setItensDistribuidos([...itensDistribuidos, item]);
      setNovoItem({ item: "", quantidade: "", departamento: "", responsavel: "", placa:"" });
      
    }
  };

  const marcarComoPago = (id) => setContas(contas.map((c) => (c.id === id ? { ...c, status: "pago" } : c)));

  const totalPendente = contas.filter((c) => c.status === "pendente").reduce((sum, c) => sum + c.valor, 0);
  const totalPago = contas.filter((c) => c.status === "pago").reduce((sum, c) => sum + c.valor, 0);
  const totalItens = itensDistribuidos.reduce((sum, item) => sum + item.quantidade, 0);

  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.headerContent}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={style.iconCircle}>📊</div>
            <div>
              <h1 className={style.headerTitle}>AutoMecânicaLeôncio</h1>
              <p className={style.headerSubtitle}>AutoMecanica</p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p>Último acesso</p>
<p className={style.headerSubtitle}>{new Date().toLocaleDateString("pt-BR")}</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={style.nav}>
        <div className={style.navContainer}>
          {[
            { id: "overview", label: "Visão Geral", icon: "📊" },
            { id: "pagamentos", label: "Pagamentos", icon: "💰" },
            { id: "Entrada", label: "Entrada", icon: "📦" },
            {id: "Saida", label: "Saida", icon: "📦"}
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${style.navButton} ${
                activeTab === tab.id ? style.navButtonActive : style.navButtonInactive
              }`}
            >
              <span style={{ marginRight: "0.5rem" }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className={style.main}>
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className={style.section}>
            <div className={style.cardGrid}>
              <div className={`${style.card} ${style.cardRed}`}>
                <div className={style.cardIcon}>⏰</div>
                <div>
                  <p className={style.cardTitle}>Contas Pendentes</p>
                  <p className={style.cardValue}>
                    R$ {totalPendente.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>

              <div className={`${style.card} ${style.cardGreen}`}>
                <div className={style.cardIcon}>✅</div>
                <div>
                  <p className={style.cardTitle}>Contas Pagas</p>
                  <p className={style.cardValue}>
                    R$ {totalPago.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>

              <div className={`${style.card} ${style.cardBlue}`}>
                <div className={style.cardIcon}>📦</div>
                <div>
                  <p className={style.cardTitle}>Itens Distribuídos</p>
                  <p className={style.cardValue}>{totalItens}</p>
                </div>
              </div>
            </div>

            <div className={style.section} style={{ marginTop: "2rem" }}>
              <h3 className={style.sectionTitle}>Atividades Recentes</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {itensDistribuidos.slice(0, 3).map((item) => (
                  <div key={item.id} style={{ display: "flex", alignItems: "center", padding: "1rem", backgroundColor: "#f9fafb", borderRadius: "0.5rem" }}>
                    <div className={style.cardIcon}>📦</div>
                    <div style={{ flex: 1, marginLeft: "1rem" }}>
                      <p style={{ fontWeight: "600" }}>{item.item}</p>
                      <p className={style.headerSubtitle}>Distribuído para {item.departamento}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p>{item.quantidade} unidades</p>
                      <p className={style.headerSubtitle}>{new Date(item.data).toLocaleDateString("pt-BR")}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pagamentos Tab */}
        {activeTab === "pagamentos" && (
          <div className={style.section}>
            {/* Formulário de nova conta */}
            <div className={style.section}>
              <h3 className={style.sectionTitle}>Adicionar Nova Conta</h3>
              <div className={style.formGrid}>
                <input
                  className={style.input}
                  type="text"
                  placeholder="Descrição da conta"
                  value={novaConta.descricao}
                  onChange={(e) => setNovaConta({ ...novaConta, descricao: e.target.value })}
                />
                <input
                  className={style.input}
                  type="number"
                  placeholder="Valor (R$)"
                  value={novaConta.valor}
                  onChange={(e) => setNovaConta({ ...novaConta, valor: e.target.value })}
                />
                <input
                  className={style.input}
                  type="date"
                  value={novaConta.vencimento}
                  onChange={(e) => setNovaConta({ ...novaConta, vencimento: e.target.value })}
                />
                <select
                  className={style.select}
                  value={novaConta.categoria}
                  onChange={(e) => setNovaConta({ ...novaConta, categoria: e.target.value })}
                >
                  <option value="Peças">Peças</option>
                  <option value="Combustível">Combustível</option>
                  <option value="Manutenção">Manutenção</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <button className={style.buttonBlue} onClick={adicionarConta}>
                Adicionar Conta
              </button>
            </div>

            {/* Lista de contas */}
            <div className={style.tableContainer} style={{ marginTop: "2rem" }}>
              <table className={style.table}>
                <thead className={style.thead}>
                  <tr>
                    <th className={style.th}>Descrição</th>
                    <th className={style.th}>Categoria</th>
                    <th className={style.th}>Valor</th>
                    <th className={style.th}>Vencimento</th>
                    <th className={style.th}>Status</th>
                    <th className={style.th}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {contas.map((conta) => (
                    <tr key={conta.id} className={style.trHover}>
                      <td className={style.td}>{conta.descricao}</td>
                      <td className={style.td}>{conta.categoria}</td>
                      <td className={style.td}>
                        R$ {conta.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </td>
                      <td className={style.td}>{new Date(conta.vencimento).toLocaleDateString("pt-BR")}</td>
                      <td className={style.td}>
                        <span className={conta.status === "pago" ? style.statusPaid : style.statusPending}>
                          {conta.status === "pago" ? "Pago" : "Pendente"}
                        </span>
                      </td>
                      <td className={style.td}>
                        {conta.status === "pendente" && (
                          <button className={style.actionButton} onClick={() => marcarComoPago(conta.id)}>
                            Marcar como Pago
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {/* Entrada Tab */}
        {activeTab === "Entrada" && (
          <div className={style.section}>
            {/* Formulário de distribuição */}
            <div className={style.section}>
              <h3 className={style.sectionTitle}>Registrar Nova Entrada</h3>
              <div className={style.formGrid}>
                <input
                  className={style.input}
                  type="text"
                  placeholder="Nome do item"
                  value={novoItemAdquirido.item}
                  onChange={(e) => setNovoItemAdquirido({ ...novoItemAdquirido, item: e.target.value })}
                />
                <input
                  className={style.input}
                  type="number"
                  placeholder="Quantidade"
                  value={novoItemAdquirido.quantidade}
                  onChange={(e) => setNovoItemAdquirido({ ...novoItemAdquirido, quantidade: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Nome do fornecedor..."
                  className={style.select}
                  value={novoItemAdquirido.Fornecedor}
                  onChange={(e) => setNovoItemAdquirido({ ...novoItemAdquirido, Fornecedor: e.target.value })}
                />
                <input
                  className={style.input}
                  type="number"
                  placeholder="Preço Unitário:"
                  value={novoItemAdquirido.precoUnitario}
                  onChange={(e) => setNovoItemAdquirido({ ...novoItemAdquirido, precoUnitario: e.target.value })}
                />
                <input
                  className={style.input}
                  type="number"
                  placeholder="Preço Geral:"
                  value={novoItemAdquirido.precoGeral}
                  onChange={(e) => setNovoItemAdquirido({ ...novoItemAdquirido, precoGeral: e.target.value })}
                />
              </div>
              <button className={style.buttonGreen} onClick={adicionarItemAdquirido}>
                Registrar Nova Entrada
              </button>
            </div>

            {/* Lista de entradas */}
            <div className={style.tableContainer} style={{ marginTop: "2rem" }}>
              <table className={style.table}>
                <thead className={style.thead}>
                  <tr>
                    <th className={style.th}>Item</th>
                    <th className={style.th}>Quantidade</th>
                    <th className={style.th}>Fornecedor</th>
                    <th className={style.th}>Preço Unitário</th>
                    <th className={style.th}>Preço Geral</th>
                  </tr>
                </thead>
                <tbody>
                  {itensAdquiridos.map((item) => (
                    <tr key={item.id} className={style.trHover}>
                      <td className={style.td}>{item.item}</td>
                      <td className={style.td}>{item.quantidade}</td>
                      <td className={style.td}>{item.Fornecedor}</td>
                      <td className={style.td}>{"R$ " + item.precoUnitario}</td>
                      <td className={style.td}>{"R$ " + item.precoGeral}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Distribuição Tab */}
        {activeTab === "Saida" && (
          <div className={style.section}>
            {/* Formulário de distribuição */}
            <div className={style.section}>
              <h3 className={style.sectionTitle}>Registrar Nova Distribuição</h3>
              <div className={style.formGrid}>
                <input
                  className={style.input}
                  type="text"
                  placeholder="Nome do item"
                  value={novoItem.item}
                  onChange={(e) => setNovoItem({ ...novoItem, item: e.target.value })}
                />
                <input
                  className={style.input}
                  type="number"
                  placeholder="Quantidade"
                  value={novoItem.quantidade}
                  onChange={(e) => setNovoItem({ ...novoItem, quantidade: e.target.value })}
                />
                <select
                  className={style.select}
                  value={novoItem.departamento}
                  onChange={(e) => setNovoItem({ ...novoItem, departamento: e.target.value })}
                >
                  <option value="">Selecione A Prefeitura</option>
                  <option value="Secretaria de Obras">Prefeitura de Esperança</option>
                  <option value="Secretaria de Transporte">Prefeitura de Santa Rosa</option>
                  <option value="Secretaria de Saúde">Prefeitura de Boa vista</option>
                  <option value="Secretaria de Educação">Prefeitura de Areia</option>
                </select>
                <input
                  className={style.input}
                  type="text"
                  placeholder="Responsável"
                  value={novoItem.responsavel}
                  onChange={(e) => setNovoItem({ ...novoItem, responsavel: e.target.value })}
                />
                <input
                  className={style.input}
                  type="text"
                  placeholder="Placa"
                  value={novoItem.placa}
                  onChange={(e) => setNovoItem({ ...novoItem, placa: e.target.value })}
                />
              </div>
              <button className={style.buttonGreen} onClick={adicionarItem}>
                Registrar Distribuição
              </button>
            </div>

            {/* Lista de distribuições */}
            <div className={style.tableContainer} style={{ marginTop: "2rem" }}>
              <table className={style.table}>
                <thead className={style.thead}>
                  <tr>
                    <th className={style.th}>Item</th>
                    <th className={style.th}>Quantidade</th>
                    <th className={style.th}>Prefeitura</th>
                    <th className={style.th}>Responsável</th>
                    <th className={style.th}>Placa</th>
                    <th className={style.th}>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {itensDistribuidos.map((item) => (
                    <tr key={item.id} className={style.trHover}>
                      <td className={style.td}>{item.item}</td>
                      <td className={style.td}>{item.quantidade}</td>
                      <td className={style.td}>{item.departamento}</td>
                      <td className={style.td}>{item.responsavel}</td>
                      <td className={style.td}>{item.placa}</td>
                      <td className={style.td}>{new Date(item.data).toLocaleDateString("pt-BR")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}