<h1 align="center"> Guia do Expo 🚀 </h1>

Expo é uma ferramenta utilizada para o React Native.

* Expo Documentação - https://docs.expo.io/

* Expo Dev - https://expo.io/

* Expo na Apple Store - https://apps.apple.com/br/app/expo-client/id982107779

* Expo na Google Play - https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US

# Etapas para testar o app
Para testar sem precisar buildar um apk, apenas baixe o app Expo que está presente pra Android e iOS. com o app baixado, note que, ao realizar o ``npm start`` (debugando o app), irá abrir uma página no seu navegador e junto um QR Code. 

* No iphone, abra a câmera e foque no QR Code para ver o resultado.

* No android, abra o app e clique no ícone do QR Code e foque no QR Code da página do seu navegador.
  

## 1. Instalando o CLI (padrão react)
```
npm install --global expo-cli
```

## 2. Debugando
```
npm start
```

# ANTES DE BUIDAR O .apk/.ipa!

Para poder buildar .apk ou .ipa, é necessário obter uma conta no [Expo](https://expo.io/).

## 3. Buildando o .apk (Android)
```
expo build:android -t apk
```

## 3.1. Rodando o .apk direto no celular (necessário estar plugado no USB)
```
adb install app-filename.apk
```

## 4. Rodando a build no Apple TestFlight (iOS)
```
build ios
```
Logo, digite a sua Apple ID e sua senha [**(conta de desenvolvedor)**](https://developer.apple.com/). A conta de DEV serve para gerar o arquivo .ipa (tipo o .apk só que para iOS).

Ao fazer login, o Expo fará a seguinte pergunta:

### ***How would you like to upload your credentials?***

Bom, na hora de publicar *apps* iOS, o processo é super chato e demorado, pois é preciso criar várias condições, licenças, perfis de provicionamento, criar o *app* dentro do iTunes Connect para testar, certificados, enfim, muita coisa :sweat_smile:

Porém, o Expo consegue fazer TUDO sozinho, ou seja, menos dor de cabeça.

Portanto, selecione a opção:

```
Expo handles all credentials, you can still provide overrides
```


### ***Will you provide your own Apple Distribution Certificate?***

```
Let Expo handle the process
```


### ***Would you like to reuse Apple Distribution Certificate from another app?***

```
No, please create a new one
```


### ***Will you provide your own Apple Push Notifications service key?***

```
Let Expo handle the process
```


### ***Would you like to reuse Apple Push Notifications service key from another app?***

```
No, please create a new one
```

Agora precisamos testar o *app*. Para isso, é necessário utilizar o [**TestFlight**](https://developer.apple.com/testflight/). O [**TestFlight**](https://developer.apple.com/testflight/) serve para você testar os *apps* para iOS.

> Devido as constantes atualizações no site da Apple, poderá acontecer em que, as próximas etapas não sejam iguais as atuais páginas.
O Diego do canal da Rocketseat explica melhor essa parte! [**Link do vídeo**](https://youtu.be/wYMvzbfBdYI?t=1213).

* Acesse o [**Apple Developer Program**](https://developer.apple.com/account);

* Faça o login da sua Apple ID;

* Clique em App Store Connect;

* Meus apps;

* No canto superior esquerdo da tela, localize um ícone com sinal de +;

* Pronto, agora é só cadastrar o app!
