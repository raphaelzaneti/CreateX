# CREATEX ONLINE COURSES
Home page do CreateX online courses. 

Espero o feedback de vcs :)

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
- Na Team, houve bastante sofrimento para garantir o alinhamento dos itens dentro do Slick, já que uma das imagens (Jerome) tem height maior que as demais. Consegui resolver aplicando uma classe de ajuste na imagem via jQuery, o que gerou novos bugs (ver "print extra", no final do readme);
- Dificuldade em aplicar o slick em outras partes da página (Courses e Testemonials). Ainda não reoslvi, mas pretendo o fazer;

- Extra: tentei criar um alerta pedindo o Ok do usuário para utilizarmos os cookies (LGPD está aí...), mas não ficou como eu gostaria e preferi não colocar essa funcionalidade no projeto, por ora. De qualquer forma, deixei os arquivos no GitHub para que vocês acompanhem o que foi feito sobre isso.

## Prints do projeto
Abaixo, compartilho os prints de algumas telas do projeto. Esses e outros prints estão na pasta "prints", aqui no repositório.

Home mobile (width = 320px)
![homemobile](https://drive.google.com/uc?export=view&id=1v5txB6Lv8WWDBpdHZS5pzBxR9KD0LrUD)

Menu haburguer mobile (width = 320px)
![menu hamburger](https://drive.google.com/uc?export=view&id=1MvLK7YP5pkUeoTuupfqJeWMvUG8zPYPw)

Carrossel do team no mobile (width = 414px)
![team no mobile](https://drive.google.com/uc?export=view&id=1TtyJqrhcpmLP9PxtXvqX0I-uJUbZHM9k)

Courses no tablet (width = 768px)
![courses no tablet](https://drive.google.com/uc?export=view&id=1LQH-fLI9OdnESYde2-2ZcdL0vljTRJEf)

Blog no tablet (width = 768px)
![blog no tablet](https://drive.google.com/uc?export=view&id=1WCX3T-FuyUqdClZ1KFB8IWYlHSnCUnrV)

Footer no tablet (width = 768px)
![footer no tablet](https://drive.google.com/uc?export=view&id=1oTQG3WrsVuXKDeP2ZzBL2KfjIKcdNv8p)

Home no desktop (width = 1440px)
![home no desktop](https://drive.google.com/uc?export=view&id=16JUGASxewvuJ3xXQywLc38khnPgGO_Tn)

Courses no desktop (width = 1440px)
![courses no desktop](https://drive.google.com/uc?export=view&id=1dDRiYEmFYnTVrcUj4Psx8SYUGVHDoJ6s)

## Print Extra: pensa na raiva
O brasileiro não tem um dia de paz. Durante a redação do readme, depois de fechar o projeto, cruzo com essa maravilha no mobile:

![bug que me deu raiva](https://drive.google.com/uc?export=view&id=1aVRyg89CGMDzPZJ1MHSHygTGiZRKNswf)

Uma das imagens do JSON tinha height maior que as demais, o que deixava a renderização desalinhada em carrosséis de 3 elementos (width > 1280). Para resolver esse problema, delimitei o tamanho das imagens na classe CSS, mas aí surgiu um novo problema: os textos ficavam desalinhados com relação às imagens (não centralizados). Para isso, era preciso aplicar um display flex, o que só foi possível aplicando o estilo inline via jQuery (aparentemente, algumas classes do slick têm !important).

Isso resolveu o problema no Desktop, mas causou essa "arte" no mobile. Passado o momento de raiva, a solução foi, via jQuery, criar um IF para condicionar o display flex inline a um min-width (eu nem sabia que era possível fazer isso, rs).

No fim deu tudo certo!
