# Acadêmicos · checkpoint de 11/11/2026

## Entrega conectada, parcial
- Site institucional preservado; novo portal.html.
- Supabase JS 2.119.0, chave publishable exclusivamente, login por e-mail/senha, logout e recuperação PKCE. Sessão em sessionStorage. Nenhuma chave secreta.
- Consulta pública `clubs.select(id,slug)` pelo slug informado; resposta atual vazia, que não distingue ausência de registro de restrição RLS.
- Campinho SVG: até 11 apelidos, duas formações, posicionamento por clique e teclado.
- Pix estático: EMV TLV, CRC16-CCITT-FALSE, QR Code, copia e cola. Chave manual, sem consulta DICT ou liquidação. Caixa escolhido é somente identificação da cobrança, não lançamento.
- Ficha de cobrança 80 mm: não fiscal, não comprova pagamento; não é cupom de venda.
- Compressor WebP local: JPG/PNG/WebP até 12 MB e 40 MP, saída máxima 1600 px, reencodificação sem copiar EXIF. Sem upload.
- Chart.js 4.6.1: cenário DRE manual por competência, centavos inteiros, tributos informados. Não integrado ao razão; não é lucro líquido ou EBITDA.

## Bloqueios concretos
As tabelas informadas respondem a consultas REST sem linhas; os nomes de tabelas não fornecem colunas, políticas, gatilhos, grants ou assinaturas RPC. As RPCs sem parâmetros retornaram PGRST202. Nenhuma chamada financeira mutante foi tentada.
`get_pelada_roster_by_pin` e `toggle_pelada_player_paid`: adaptadores preparados e bloqueados até inspecionar contratos SQL. Não adivinhar parâmetros.
Não há PDV real, baixa de estoque, pagamento de mensalidade, criação/confirmação de reserva, DRE automática, curadoria ou upload integrados nesta entrega.
O projeto continua ausente nas conexões Supabase Futebol/Primary. Usuário escolheu disponibilizar a conexão; depende de concluir a autorização da conta/organização correta.

## Validação
12 testes Node aprovados: sorteio, CRC conhecido 29B1, exemplo BCB 1D3D, estrutura TLV, valores monetários, DRE positiva/negativa e entrada inválida.
Build local concluído com dependências fixadas e package-lock.
Navegador desktop: conexão Supabase sem erro, clube não visível; SVG renderizado e movimento por teclado; Pix e QR gerados; DRE manual calculada e tabela conferida.
Login com conta real, e-mail de recuperação, RLS entre usuários, PIN, upload WebP no navegador, impressão física e layout móvel ainda não homologados. Nenhuma conta foi criada nem e-mail disparado nos testes.

## Continuação necessária
1. Conectar ao projeto wreahhksoowbtyfjwksk para ler migrations, pg_policies e definições RPC.
2. Conferir memberships/papéis e rate limit de PIN; PIN não autoriza administração.
3. Mapear tipos e integrar dados reais sem fallbacks fictícios.
4. Validar endpoint transacional de venda com idempotência, preços/custos históricos, estoque, recebimentos e auditoria. Nunca finalizar venda por várias escritas independentes no navegador.
5. Configurar fiscal por produto/operação; CFOP 5.405 não universal. Preservar caixa da pelada separado do caixa da arena.
6. Cadastrar a URL de retorno https://academicos-arena.blossomingjive.chatgpt.site/portal.html no Supabase Auth Redirect URLs. Homologar recuperação no mesmo navegador/aba por usar sessionStorage e PKCE.

## Build
`npm ci` / `npm run build` / `npm test`. Servir dist. Fontes modulares em src; artefato do portal gerado em dist/portal.js.

Referência Pix: https://www.bcb.gov.br/content/estabilidadefinanceira/pix/Regulamento_Pix/II_ManualdePadroesparaIniciacaodoPix.pdf
