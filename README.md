# CREATEX ONLINE COURSES
Home page do CreateX online courses. 

## Resumo das funcionalidades
- Mobile first;
- Responsividade ajustada aos principais tamanhos de tela para mobile, tablet e Desktop (5 de cada), orientação retrato e paisagem (fonte: https://www.designrush.com/trends/website-dimensions)
- Uso de Sass e Bootstrap para trabalhar com a estilização;
- Menu mobile (hamburguer), criado a partir do Bootstrap;
- Na estilização, uso de flex e grid de diferentes formas;
- Uso de JavaScript e um pouco de jQuery;
- Na Team, uso do Slick para fazer o carrossel;
- Na Team e no Courses, os cards foram gerados a partir do consumo de um JSON disponível na internet;
- Deixei tudo pronto para inserir o carrossel no Courses e Testemonials.

## O que ainda precisa ser feito?
- Inserir o carrossel no Courses e no Testemonials;

## Pontos de dificuldade e soluções encontradas
- Problemas para usar o Live Server, já que ele sempre caía do nada no Chrome. No fim, bastou usar no Firefox (thanks Vittor pelo help!);
- Menu hamburuger: foi difícil "acertar" o uso dele via Bootstrap. Antes de saber que o Bootstrap já disponibilizava um desses, fiz o menu "na mão";
- Alinhamento da navbar em 100% da width da tela: foi preciso fazer ajustes nas medias querries para garantir que não ficasse maior ou menor do que a largura da tela;
- Num primeiro momento, por nunca ter usado o Figma, eu baixava cada fração dos vetores/ícones a serem utilizados, rs;
- No início, foi dificil alinhar alguns dos elementos dentro de alguns cards (Courses, Events...). Por isso, fiz o curso do Alura de grid e flex e na sequência resolvi esses problemas;
- Da mesma forma, fiz um curso do Alura de Bootstrap, apenas para melhorar meu uso da ferramenta e aprender a usar o grid, e acabei aprendendo uma série de outras funcionalidades que foram úteis no projeto (menu hamburguer, por exemplo);
- Num primeiro momento, tive dificuldade de consumir o JSON, porque fiquei quebrando a cabeça com o uso das promises;
- O consumo do JSON para gerar o Courses e o Team teve alguns problemas no início, pois frequentemente não era possível o acesso (talvez seja algo da minha máquina). Curiosamente, depois que passei a usar o Live Server no Firefox, esse problema reduziu a quase zero;
- No início, foi difícil usar o Slick;
- Na Team, houve bastante sofrimento para garantir o alinhamento dos itens dentro do Slick, já que uma das imagens (Jerome) tem height maior que as demais;
- Dificuldade em aplicar o slick em outras partes da página (Courses e Testemonials). Ainda não reoslvi, mas pretendo o fazer;

- Extra: tentei criar um alerta pedindo o Ok do usuário para utilizarmos os cookies (LGPD está aí...), mas não ficou como eu gostaria e preferi não colocar essa funcionalidade no projeto, por ora. De qualquer forma, deixei os arquivos no GitHub para que vocês acompanhem o que foi feito sobre isso.