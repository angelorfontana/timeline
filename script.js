function idioma(i) {
  if(i==null || i =="")  
  {
    if(document.getElementById('button_language').innerHTML =="English")
    {
      i="E";
    } else{
      i="P";
    } 
  }
  
  if(i=="P")  
  {
    document.getElementById('hello').innerHTML= "Olá<span>!</span>";
    document.getElementById('hello2').innerHTML = "Quem eu sou e o que eu faço";
    document.getElementById('button_language').innerHTML = "English";
    
    document.getElementById('about').innerHTML = `
        <p>
          Sou proativo, colaborativo, criativo, tenho facilidade de aprender, boa capacidade analítica, 
          entusiasmado por tecnologia e processos, interajo bem com pessoas e setores para desenvolver 
          visão holística conseguindo desta forma aplicar a tecnologia para melhorar os negócios.
        </p>
        <p>
          Baseio meu conhecimento em fundamentos da ciência da computação e gestão de negócios, 
          desenvolvo novas habilidades comportamentais e tecnológicas com facilidade. 
          Atualmente atuo na startup <a href="https://playsis.com.br/">Play Sistemas Inteligentes</a>,
          como coordenador do projeto, Product Owner, arquiteto de software e programador. 
          SKILLs deste projeto:  ASPNetCor, .Net Serviço Windows,NetCor Console, C#, MVC,
          Design Patterns, SOLID, Clean Architecture, bootstrap, HTML, CSS, Java Scripit, SqlServer, IIS, DEVOPs, C, IOT, Eletrónica,
          IA-Algoritimo genético, IA-Algoritimo PSO, IA-Machine learne reconhecimento de imagens e Pyton. 
        </p>
        <p>
          Tive a oportunidade de desenvolver e/ou coordenar projetos de tecnologia para varejo e
          indústria de grande porte, acumulando conhecimentos em diversas áreas, tais como: comercial, 
          contábil, controladoria, custos, finanças, gestão da qualidade, gestão de pessoas, logística 
          interna, logística externa e processos produtivos.
        </p>`;



  
        
        // legenda 
        document.getElementById('data').innerHTML = "Empresa e data";
        document.getElementById('Titulo_data').innerHTML = "Projeto, Softwere, Módulo de software ou marco";
        document.getElementById('data_desc01').innerHTML = "Descrição, resultados e habilidades";    
        document.getElementById('data_complemento').innerHTML = "A cor representa a empresa aonde eu trabalhei. Mesma cor mesma empresa.";    
        
        
        document.getElementById('a01').innerHTML = "PLAYSIS 2022  -  2023";
        document.getElementById('b01').innerHTML = "Módulo de software: Otimizador de onduladeira";
        document.getElementById('c01').innerHTML = `Desenvolvi um otimizador de plano de corte de chapas para onduladeira. 
        <br><br><b>Ganhos:</b> Redução de desperdício de matéria prima entre 0.3% e 0.5%. 
        <br>Em uma empresa de grande porte equivale entre 70 a 120 mil reais mes. 
        <br><br><b>Skills:</b> C# Back END, Otimização matematica.`;    

        
        document.getElementById('a02').innerHTML = "PLAYSIS 2021";
        document.getElementById('b02').innerHTML = "Módulo de software: Otimizador de sequenciamento de produção";
        document.getElementById('c02').innerHTML = `Desenvolvi otimizador que faz o sequenciamento de produção para fabricas de papelão ondulado. 
        <br><br><b>Ganhos:</b> 
        <br>- Redução do tempo de setup;
        <br>- Planejamento online da fabrica;
        <br>- Aumento de produtividade 
        <br>- Redução do atraso de entrega. 
        <br><br><b>Skills:</b> Full Stack C#.`;    

        document.getElementById('a03').innerHTML = "PLAYSIS 2020";
        document.getElementById('b03').innerHTML = "Módulo de software: Otimizador de transporte rota e cubagem";
        document.getElementById('c03').innerHTML = `Desenvolvi um otimizador para roteirizar e cubar a caminhões
        <br><br><b>Ganhos:</b> 
        <br>- Redução de custo no transporte;
        <br>- Aumento de produtividade das equipes 
        <br>- Redução do atraso de entrega. 
        <br><br><b>Skills:</b> Full Stack C#, AI Algoritimo de PSO, AI algoritimos Geneticos.`;

        document.getElementById('a04').innerHTML = "PLAYSIS 2019";
        document.getElementById('b04').innerHTML = "Módulo de Hardware e software: IOT Contador de produção";
        document.getElementById('c04').innerHTML = `Desenvolvi um contador de produção baseado em IOT.
        O sistema consiste em um hardware conectado aos sensores das maquinas e utilizado para contagem de produção e contabilização de tempos produtivos. 
        Skills, Eletronica básica, C, FREERTOS (Sistema operacional de processamento em tempo real), IOT.
        <br><br><b>Ganhos:</b> 
        <br>- Monitoramento online de produção;
        <br>- Coleta de tempos produtivos reais;
        <br>- Coleta de tempos improdutivos reais;
        <br>- Maior acurácia no indicador de OEE;
        <br>- Ganho de produtividade;
        <br><br><b>Skills:</b> Eletrónica básica,Linguagem C, C# Serviço windows, FREERTOS (Sistema operacional de processamento em tempo real) e IOT.`;

        document.getElementById('a05').innerHTML = "PLAYSIS 2018";
        document.getElementById('b05').innerHTML = "Play Sistemas Inteligentes Startup no ramo de tecnologia para fabricas de papelão ondulado.";
        document.getElementById('c05').innerHTML = `
        O APSPLAY é um sistema avançado para planejamento e execução de produção em fabricas de papelão ondulado.
        <br>Minhas responsabilidades no projeto foram:
        <br>- Definição do escopo do projeto;
        <br>- Definição da arquitetura do software;
        <br>- Coordenação da equipe;
        <br>- Desenvolvimento dos principais módulos;  
        <br><br><b>Skills:</b> Design Patterns, SOLID, Scrum, Metodos ageis, NetCor, C#`;

        document.getElementById('a06').innerHTML = "JAEPEL  2015 - 2018";
        document.getElementById('b06').innerHTML = `JAEPEL Industria de Papeis e Papelão Ondulado.`;
        document.getElementById('c06').innerHTML = `
        Na JAEPEL fui <b>Gerente de TI, </b> meu principal objetivo foi a implantação de Governança de TI focados em transparência, segurança operacional, alinhamento estratégico, e melhoria nos níveis de serviço. 
        Na implantação utilizamos alguns framework de apoio como exemplo: BSC, COBIT, ITIL, ISO 20.000, SCRUM, entre outros. 
        Entregas especificas:
        <br>- Renovação do parque de maquinas e servidores;
        <br>- Transição da equipe de terceiros para equipe mista;
        <br>- Alinhamento motivacional da equipe com foco na responsabilidade, proatividade e zelo para com o negócio. Nesta fase procuramos tornar os técnicos de TI mais conhecedores do negócio melhorando a comunicação entre técnicos e clientes internos, com isso melhoramos o senso de urgência dos problemas fazendo com que problemas urgentes não fossem deixados de lado.
        <br>- Definição do fluxo de atendimento com redução do backlog;
        <br>- Controle e gestão de riscos;
        <br>- Gestão de portfólio;
        <br>- Implementação de políticas de segurança da informação;
        <br>- Organização do processo de desastre e recover garantindo a continuidade do negócio;
        <br>- Definição de modelo de desenvolvimento de projetos de TI;
        <br>- Definição do processo de controle de códigos fontes;
        <br>- Implantação de sistema de indicadores;
        <br>- Implementação do sistema de calculo de custo de produção;
        <br>- Preparação dos sistema para suportar a legislação do bloco K e Esocial;
        <br>- Implantação de controles de estoque por radio frequência;
        <br>- Automação do processo de expedição e geração de NFs de venda;
        <br>- Automação do processo de entrada de NFs de compra;
        <br>- Atendimento legal em relação a guarda de XML;
        <br>- Automação do processo de fluxo de aprovação de compras e controle orçamentário;
        `;


        document.getElementById('a07').innerHTML = "Projeto Particular 2014";
        document.getElementById('b07').innerHTML = "Framework DynamicForms";
        document.getElementById('c07').innerHTML = `
                        Desenvolvi um Framework para automação de desenvolvimento de 
                        software baseado em dicionário de dados. 
                        Desenvolvi o projeto como hobby meu propósito foi aumentar a qualidade, 
                        reduzir o tempo e custo de fabricação de softwares.
                        <br><b> Principais caracteristicas:</b>
                        <br>- Arquitetura baseada em orientação a objetos.
                        <br>- Telas simples e complexas para CRUD.
                        <br>- Telas extenciveis permitindo customizações. 
                        <br>- Automação do processo de teste.
                        <br>- Módulo para consultas simples e complexas baseados em processamento de linguagem natural.
                        <br>- Framework foi utilizado no desen1volvimento de um protótipo para escola Kumon. 
                        <br><br><b>Skills:</b> Design Patterns, SOLID, Delphi, Sql Server`;
                        

        document.getElementById('a08').innerHTML = "IRANI 2012 - 2015";
        document.getElementById('b08').innerHTML = "Projeto: KIWIPLAN.";
        document.getElementById('c08').innerHTML = `<b>Função: Coordenador do projeto.</b>
        
        Substituímos 100% dos sistemas de chão de fabrica e comercial de três fabricas de Papelão Ondulado.
        <br>Custo aproximado de nove milhões de reais, equipe de 50 pessoas diretamente envolvidas, reestruturamos todos os processos 
            comerciais, industriais e alguns processos administrativos.
            <br>O ROI foi atingido em 3,5 anos, através de:
                <br>- Incremento de produção industrial de 3%
                <br>- Redução de horas extras
                <br>- Melhoria do indicador de OTIF (Esta melhoria sustenta reajustes de preços);
                <br>- Redução de mão de obra. 
                <br>O projeto proporcionou a implantação do CSC(centro de serviços compartilhados) dado a agilidade na execução de tarefas como  
            entrada de pedidos, planejamento de produção, planejamento de transporte, entre outros.                    </div>
        <br><br><b>Skills:</b> PMBOK, BPM `;


        document.getElementById('a09').innerHTML = "IRANI 2011";
        document.getElementById('b09').innerHTML = "Projeto: Produção OFF line.";
        document.getElementById('c09').innerHTML = `A indústria estava com sérios problemas de conectividade, muitos transtornos eram gerados por falta de consistência nos apontamentos de consumos, produção e endereçamentos de estoque.
                                                    <br>Implementei sistema para armazenamento off line de dados. 
                                                    De forma transparente para o usuário, sempre que o sistema identificasse GAPs na rede o sistema offline era acionado automaticamente.

                                                    <br><b>Ganhos:</b>
                                                    <br> - Aumento da consistência das informações; 
                                                    <br> - Maior velocidade no uso do em apontamentos de produção e endereçamento;
            <br><br><b>Skills:</b> DotNet Mobile, Apache, PHP, Mysql, SQLServer e ADVPL.  `;

        document.getElementById('a10').innerHTML = "IRANI 2010";
        document.getElementById('b10').innerHTML = "Projeto: Otimização do processo de conjugação de cargas.";
        document.getElementById('c10').innerHTML = `Implantamos software de mercado especialista em otimizar cubagem e roteirizar de veículos. 
        <br>Benefícios:</br> 
          <br>- Redução do custo de transporte em aproximadamente um milhão de reias por ano. 
        <br><br><b>Skills:</b> Analista de requisitos, arquiteto de solução e programador.  `;

        
        document.getElementById('a11').innerHTML = "IRANI 2008 - 2010";
        document.getElementById('b11').innerHTML = "Projeto: Informatização dos processos de estoque custos e expedição das plantas de papelão ondulado.";
        document.getElementById('c11').innerHTML = `
        <br><b>Ganhos do projeto:</b>
        <br>- Rastreamento da produção;
        <br>- Redução do tempo de fechamento contábil;
        <br>- Maior assertividade no calculo do custo de produção e orçamento de venda;
        <br>- Redução do desperdício de matéria prima;
        <br>- Redução de sobras de produção;
        <br>- Redução de índice de atraso de entrega;
        <br>- Agilidade no processo de expedição e faturamento;
        <br><br><b>Skills:</b> Coordenador, Analista de requisitos, arquiteto de solução e programador.
        `;

        document.getElementById('a12').innerHTML = "IRNAI 2007";
        document.getElementById('b12').innerHTML = "Projeto: Informatização dos controles de FSC(Forest Stewardship Council)";
        document.getElementById('c12').innerHTML = `Informatizamos os processos para facilitar a obtenção e manutenção da certificação FSC, 
        os controles foram implantados em quatro plantas de três segmentos distintos.
        <br><br><b>Skills:</b> Analista de requisitos, arquiteto de software e Programador.  `;

        document.getElementById('a13').innerHTML = "IRANI 2004 - 2006";
        document.getElementById('b13').innerHTML = "Projeto: Informatização dos processos florestais";
        document.getElementById('c13').innerHTML = `
        
        Informatizamos 100% dos processos florestais, desde a aquisição da semente até a transformação da madeira em papel.
        <br><p>Ganhos:</p>
        <br>- Automação de processos e controles manuais, como entrada de Notas, registro de prestação de serviço;
        <br>- Geração de informação estratégica para o negócio, como histórico de plantio, inventario florestal, rendimentos;
        <br>- Redução do tempo de fechamento contábil;
        <br>- Incremento da governança;
        <br><br><b>Skills:</b> Analista de requisitos, arquiteto de software e Programador. `;

        document.getElementById('a14').innerHTML = "IRANI 2004";
        document.getElementById('b14').innerHTML = "Projeto: Dynamic Queries - Primeiro grande trabalho proativo";
        document.getElementById('c14').innerHTML = `
          A empresa estava tendo problemas com lentidão e travamentos constantes no banco de dados. 
          Na época, tínhamos muitas consultas SQL em planilhas do Excel. 
          <br>Desenvolvi um algoritmo específico para processar consultas SQL dinamicamente. 
          O problema foi controlado e o sistema se tornou um gerador de relatórios muito útil e ágil 
          para a época.
        <br><br><b>Skills:</b> ADVPL Linguagem proprietaria do ERP Totvs, SqlServer  `;

        document.getElementById('a15').innerHTML = "IRNAI 2003";
        document.getElementById('b15').innerHTML = "Cargo: Analista e Programador PHP";
        document.getElementById('c15').innerHTML = `
        Manutenção e desenvolvimento da intranet, como exemplo: 
        paginas de noticias, controle de documentos, 
        integrações com sistema ERP, loja virtual, enquetes, entre outros.
        <br><br><b>Skills:</b> Linguagem PHP, Html, CSS, Banco de dados MySql  `;

        document.getElementById('a16').innerHTML = "IRANI 2003 - 2015";
        document.getElementById('b16').innerHTML = "Celulose Irani SA Empresa de papel e papelão ondulado.";
        document.getElementById('c16').innerHTML = `<b>Marco:Contratado como analista de sistema Pleno</b>
            A Irani é a quarta maior empresa brasileira no seguimento, 
            tive o privilegio e oportunidade de fazer parte da evolução desta maravilhosa empresa.
            Com um ambiente muito saudável para se trabalhar e altamente profissional, 
            tive oportunidade de me desenvolver como profissional e como pessoa. 
            Obrigado Celulose Irani gradidão eterna.
         `;

          document.getElementById('a17').innerHTML = "Mult-Software 2003";
          document.getElementById('b17').innerHTML = "Projeto Loja virtual";
          document.getElementById('c17').innerHTML = `

          <br><br><b>Skills:</b> Linguagem PHP, Apache, Mysql, Html, CSS
          `;
          document.getElementById('a18').innerHTML = "Mult-Software 2000 - 2003";
          document.getElementById('b18').innerHTML = `Mult-Software Empresa de desenvolvimento de software
          <br><b>Cargo: Programador Pleno</b>`;
          document.getElementById('c18').innerHTML = `
          Contratado especificamente para desenvolver software ERP para pequenas empresas.
          Recrutado por bom desempenho universitário nas matérias de programação, banco de dados e engenharia de software.
          <br><br><b>Skills:</b> Arquitetura em 3 camadas, Linguagem Delphi, Banco de dados Interbase, UML Use cases para documentação, Orientação a objetos foi usada mais para construção de componentes e telas evitando retrabalho e proporcionando reutilização de código, regras de negocio eram escritas de forma procedural.
          `;
          document.getElementById('a19').innerHTML = "UNOCHAPECO - 2000";
          document.getElementById('b19').innerHTML = "Grupo de estudo fabrica de software";
          document.getElementById('c19').innerHTML = `Criamos um grupo de estudo para desenvolver um software para consultório odontológico.

          <br><br><b>Skills desenvolvidas no grupo:</b>Arquitetura cliente servidor, Linguagem Delphi, Banco de dados Interbase, UML Use cases para documentação, Orientação a objetos foi usada mais para construção de componentes e telas, regras de negocio eram escritas de forma procedural.`;
          
          document.getElementById('a20').innerHTML = "UNOCHAPECO - 1999";
          document.getElementById('b20').innerHTML = "Marco: Inicio faculdade de ciências da computação";
          document.getElementById('c20').innerHTML = ``;
 
 }
  else   
  {
      document.getElementById('hello').innerHTML = "Hello<span>!</span>";
      document.getElementById('hello2').innerHTML = "Here's who I am & what I do";
      document.getElementById('button_language').innerHTML = "Portuguese";
      
      
        document.getElementById('about').innerHTML = `
          <p>
            I am proactive, collaborative, creative, easy to learn, good analytical skills,
            enthusiastic about technology and processes, I interact well with people and sectors to develop
            A holistic view has thus enabled the application of technology to improve business.
          </p>

        <p>
            I base my knowledge on fundamentals of computer science and business management,
            I develop new behavioral and technological skills with ease.
            I currently work at the startup <a href="https://playsis.com.br/">Play Sistemas Inteligentes</a>,
            as project coordinator, Product Owner, software architect and programmer.
            SKILLs for this project: ASPNetCor, .Net Windows Service, NetCor Console, C#, MVC,
            Design Patterns, SOLID, Clean Architecture, bootstrap, HTML, CSS, Java Script, SqlServer, IIS, DEVOPs, C, IOT, Eletronica,
            IA-Genetic Algorithm, AI-Algorithm PSO, IA-Machine learne image recognition and Python.
          </p>
          <p>
            I had the opportunity to develop and/or coordinate technology projects for retail and
            large industry, accumulating knowledge in several areas, such as: commercial,
            accounting, controllership, costs, finance, quality management, people management, logistics
            internal, external logistics and production processes.
          </p>`;


    // legenda 
    document.getElementById('data').innerHTML = "Company and date";
    document.getElementById('Titulo_data').innerHTML = "Project, Softwere, Modules of Softwere or Milestones";    
    document.getElementById('data_desc01').innerHTML = "Description, Resultes end Skills";    
    document.getElementById('data_complemento').innerHTML = "The color represents the company where I worked. Same color same company.";    



  }
}

