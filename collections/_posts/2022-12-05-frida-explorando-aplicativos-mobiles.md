---
layout: post
title:  "Frida - Explorando aplicativos mobiles"
---

# Frida - Explorando aplicativos mobiles
Frida é uma ferramenta de engenharia reversa e injeção de código para aplicativos móveis. Ele é usado para modificar o comportamento de aplicativos em tempo de execução, permitindo que atacantes, desenvolvedores, pessoas que fazem testes de depuração façam alterações e adicionem recursos sem precisar recompilar o aplicativo. Frida é compatível com várias plataformas, incluindo Android, iOS, Windows, macOS e Linux.

# Antes de Tudo
Para executar o Frida, você precisará de um emulador de sua preferência, no meu caso gosto de utilizar o **[Memu](https://www.memuplay.com/pt/)**, configure ele da maneira que preferir. Você pode usar um celular para fazer, mas precisará de um cabo USB em mãos para se conectar ao Frida. Tanto no emulador quanto no celular você precisará de root.

Vamos também utilizar o **[ADB (Android Debug Bridge)](https://developer.android.com/studio/releases/platform-tools)**, que é uma ferramenta de linha de comando que permite se conectar ao sistema Android de um dispositivo e executar várias operações de depuração.

# Instalando o Frida
Para instalar o Frida, você precisará ter o Python e o pip instalados em seu sistema. Em seguida, você pode usar o seguinte comando no terminal para instalar o Frida usando o pip:

```shell
pip install frida
pip install frida-tools
```

Você deve ter notado que também foi instalado o *frida-tools*. Frida-tools é um conjunto de ferramentas de linha de comando que podem ser usadas para manipular e interagir com aplicativos em tempo de execução usando o Frida. Ele inclui ferramentas como frida-ps, frida-trace e frida-discover.

# Configurando o Android
Para conectar um dispositivo Android ao ADB, você precisará primeiro ativar a depuração USB em seu dispositivo, isso pode ser feito nas configurações do dispositivo, na seção “Sobre o dispositivo” ou “Sistema”.

Em seguida, execute o comando para verificar se o dispositivo está conectado e reconhecido pelo ADB.

```
adb devices
```

![adb devices](/assets/images//frida/adb-devices.png)

Precisamos agora baixar o **frida-server** para o nosso dispositivo android de acordo com a versão da arquitetura de nosso dispositivo. Para saber qual arquiteura estamos usando basta executar o comando.

```
adb shell getprop ro.product.cpu.abi
```

![adb getprop](/assets/images//frida/adb-getprop.png)

A arquitetura que estou usando é **x86_64**, então baixarei essa versão do **frida-server-16.0.7-android-x86_64.xz** para android. **[Repositório do Frida](https://github.com/frida/frida/releases)**.

Agora os passos são.
- Extrair o arquivo.
- Renomear o arquivo para **frida-server**, com isso facilitamos o processo.

Agora vamos fazer um push do arquivo frida-server para nosso android e setar as permissões. Abra um terminal na pasta onde você baixou, extraiu e renomeio o frida-server e execute os seguintes comandos.

**Comando para fazer o Push**:
```
adb push [caminho do arquivo] [caminho no android onde o frida-server ficará]
adb push ./frida-server /data/local/tmp
```

**Comando para setar as permissões**:
```
adb shell chmod 777 /data/local/tmp/frida-server
```

Instalado e com as permissões setadas vamos então iniciar o frida-server, lembrando que sempre que reiniciar o emulador/celular você deve iniciar o frida-server para por utilizar o Frida.

**Comando para iniciar o frida-server**:
```
adb shell /data/local/tmp/frida-server &
```

**Para verificar se está tudo funcionando de o comando**:
```
frida-ps -Uai
```

Entendendo o comando
- U, conectar ao dispositivo USB
- a, listar apenas aplicativos
- i, incluir todos os aplicativos instalados

![frida ps list](/assets/images//frida/frida-ps-list.png)

# Conclusão
Hoje aprendemos a configurar o frida para pode brincar com alguns aplicativos, pretendo trazer mais artigos sobre frida principalmente para exploração. Agora não perca tempo e procure mais sobre frida scripts e crie seu próprios. Obrigado por ler este artigo e espero que tenha te ajudado.

Esse artigo foi escrito ouvindo várias músicas mas sem dúvida essa foi a principal **[Conversa Com Deus - MC Kadu](https://www.youtube.com/watch?v=fFPpIdI8iUg)**.

# Referências
- https://frida.re/docs/home/