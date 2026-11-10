# Acadêmicos — site institucional, incremento 1

10/11/2026. Referência: PROMPT_MASTER_M14_ARENA_OS_V5.md.

## Implementado
- Site institucional responsivo em azul, branco e marinho; ilustrações conceituais e marca provisória.
- Planejador de consulta gera mensagem copiável; não envia, reserva ou recebe pagamento.
- Sorteador local aleatório para 2–4 times, capacidade de 2–11 atletas, excedentes em reservas, validação de apelidos duplicados. Sem classificação por estrelas ou posições.
- Perguntas frequentes com separação reserva/pagamento, caixa do grupo/arena e extensão exclusiva da equipe.
- Sem coleta de CPF, dados de contato, cartão, analytics ou persistência de apelidos.

## Verificado
- `node --test tests/draw.test.js`: seis testes aprovados (10/15/20 atletas, incompletos, excedentes, duplicados/configuração).
- Sintaxe de app.js validada.
- Navegador: renderização desktop, abertura/fechamento de modal, sorteio de 10 atletas em dois times, preparação de mensagem.
- Layout mobile implementado via CSS; ainda sem validação visual em dispositivo móvel.

## Bloqueios / não implementado
- Supabase Acadêmicos wreahhksoowbtyfjwksk não está acessível nas conexões atuais. Futebol e Primary não listam projetos; demais conexões listam projetos diferentes. Nenhum banco foi alterado.
- Sem Auth, memberships, agenda online, confirmação concorrente, financeiro, PDV, impostos, pagamentos, emissão fiscal ou PWA.
- Não há taxas fiscais universais ou preços fictícios. Configuração tributária não foi implementada.
- Sem fotos reais, logo oficial, telefone ou endereço completo verificados.
- Arquivo libfile_a70508e663548191a6b57f009e585d47 não pôde ser resolvido; usado Master V5 anexado.

## Próximo incremento
Restabelecer acesso ao projeto Supabase Acadêmicos; inspecionar schema, funções, grants, migrations e RLS; implementar Auth e associações por arena/grupo, disponibilidade pública sem dados privados e solicitações com confirmação transacional pela equipe. Só então integrar caixa, pagamentos e fiscal. Manter os livros do grupo e da arena separados.

## Desenvolvimento
Sem dependências. Servir `dist/` via servidor HTTP estático. Executar testes com Node.js: `npm test`.
